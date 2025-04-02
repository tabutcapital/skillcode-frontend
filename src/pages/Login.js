import React, { useState } from 'react';
import { Button, TextField, CircularProgress, Box, Link, FormControl, InputLabel, Select, MenuItem, Container, Typography } from '@mui/material'; // Added Container and Typography
import { useNavigate } from 'react-router-dom';
import { post } from '../utils/request'; // Ensure this matches the export in request.js
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!form.email || !form.password) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await post('/login', form); // Adjust URL for your backend endpoint

      if (response.ok && response.token && response.role) { // Check for token and role in response
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role); // Store role in localStorage if needed
        toast.success('Logged in successfully!');
        navigate(response.role === 'mentor' ? '/dashboard/tm' : '/dashboard/student'); // Redirect based on role
      } else {
        const errorMessage = response.message || 'Failed to log in. Please try again.';
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error('An error occurred while logging in. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit} className="form">
        <TextField 
          label="Email" 
          name="email" 
          type="email" 
          required 
          fullWidth 
          sx={{ mb: '1rem' }} 
          onChange={handleInputChange}
        />
        <TextField 
          label="Password" 
          name="password" 
          type="password" 
          required 
          fullWidth 
          sx={{ mb: '1rem' }} 
          onChange={handleInputChange}
        />
        <FormControl fullWidth sx={{ mb: '1rem' }}>
          <InputLabel>Account Type</InputLabel>
          <Select
            name="role"
            value={form.role}
            onChange={handleInputChange}
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="mentor">Technical Mentor</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" fullWidth disabled={loading} sx={{ mb: '1rem' }}>
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </Button>
        <Box sx={{ textAlign: 'center' }}>
          <Link onClick={() => navigate('/signup')} component="button" variant="body2">
            Create an Account
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default LoginPage;
