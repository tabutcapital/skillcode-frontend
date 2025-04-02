import React, { useState } from 'react';
import { Button, TextField, CircularProgress, Box, Link, FormControl, InputLabel, Select, MenuItem, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { post } from '../utils/request'; // Ensure this matches the export in request.js
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const [form, setForm] = useState({ first_name: '', email: '', password: '', passwordConfirm: '', role: 'student' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.password !== form.passwordConfirm) {
      toast.error("Passwords don't match!");
      setLoading(false);
      return;
    }

    const { email, first_name, password, role } = form; // Extract only required fields
    const payload = { email, first_name, password, role }; // Prepare payload

    console.log('Payload being sent:', payload); // Debug payload

    try {
      const response = await post('/signup', payload); // Send only the required fields
      console.log('Response from backend:', response); // Debug response

      if (response.ok) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        toast.success('Account created successfully!');
        navigate(role === 'mentor' ? '/createTest' : '/takeTest');
      } else {
        toast.error(response.message || 'Failed to create an account. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error); // Log any errors
      toast.error('An unexpected error occurred. Please try again.');
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit} className="form">
        <TextField 
          label="First Name" 
          name="first_name" 
          required 
          fullWidth 
          sx={{ mb: '1rem' }} 
          onChange={handleInputChange}
        />
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
        <TextField 
          label="Confirm Password" 
          name="passwordConfirm" 
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
          {loading ? <CircularProgress size={24} /> : 'Sign Up'}
        </Button>
        <Box sx={{ textAlign: 'center' }}>
          <Link onClick={() => navigate('/login')} component="button" variant="body2">
            Already have an account?
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default SignUpPage;
