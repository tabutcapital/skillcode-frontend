import React from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleTakeTest = () => {
    navigate('/takeTest'); // Navigate to the test-taking page
  };

  const handleViewResults = () => {
    navigate('/viewResults'); // Navigate to the results page
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Welcome, Student</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth onClick={handleTakeTest}>
            Take Test
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth onClick={handleViewResults}>
            View My Results
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDashboard;
