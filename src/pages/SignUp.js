import React, { useState } from 'react';
import { Button, TextField, CircularProgress, Box, Link, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { post } from '../utils/request'; // Ensure this matches the export in request.js
import { toast } from 'react-toastify';

const SignUpPage = () => {
  const [form, setForm] = useState({ firstName: '', email: '', password: '', passwordConfirm: '', role: 'student' });
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

    const response = await post('/users/signup', form);  // Adjust URL for your backend endpoint
    if (response.ok) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      toast.success('Account created successfully!');
      navigate(form.role === 'mentor' ? '/createTest' : '/takeTest');
    } else {
      toast.error('Failed to create an account. Please try again.');
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField 
        label="First Name" 
        name="firstName" 
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
      <Button variant="contained" type="submit" fullWidth disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Sign Up'}
      </Button>
      <Box sx={{ mt: '1rem' }}>
        <Link onClick={() => navigate('/login')} component="button" variant="body2">Already have an account?</Link>
      </Box>
    </form>
  );
};

export default SignUpPage;
