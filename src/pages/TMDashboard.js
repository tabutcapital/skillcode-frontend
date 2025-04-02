import React from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const TMDashboard = () => {
  const navigate = useNavigate();

  const handleCreateTest = () => {
    navigate('/createTest'); // Navigate to the test creation page
  };

  const handleViewResults = () => {
    navigate('/viewResults'); // Navigate to the results page
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Welcome, Technical Mentor</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth onClick={handleCreateTest}>
            Create New Test
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth onClick={handleViewResults}>
            View Test Results
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TMDashboard;
