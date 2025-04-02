import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { get } from '../utils/request'; // Ensure this matches the export in request.js
import { toast } from 'react-toastify';

const TakeTest = () => {
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a test for the student to take
    const fetchTest = async () => {
      const response = await get('/tests/available');  // Adjust URL for your backend
      if (response.ok) {
        setTest(response.data);
      } else {
        toast.error('Failed to fetch test.');
      }
      setLoading(false);
    };
    fetchTest();
  }, []);

  const handleTakeTest = () => {
    // Handle the action when a student starts the test
    toast.success('Test Started!');
  };

  if (loading) return <CircularProgress />;
  if (!test) return <Typography>No tests available.</Typography>;

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>{test.name}</Typography>
      <Typography variant="body1" gutterBottom>{test.description}</Typography>
      <Button variant="contained" onClick={handleTakeTest}>Start Test</Button>
    </Box>
  );
};

export default TakeTest;
