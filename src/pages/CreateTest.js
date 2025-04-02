import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { post } from '../utils/request'; // Use this to send a request
import { toast } from 'react-toastify';

const CreateTest = () => {
  const [testName, setTestName] = useState('');
  const [testDescription, setTestDescription] = useState('');

  const handleCreateTest = async () => {
    const testData = { name: testName, description: testDescription };

    const response = await post('/tests/create', testData);  // Adjust URL for backend
    if (response.ok) {
      toast.success('Test created successfully!');
    } else {
      toast.error('Failed to create test!');
    }
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Create a New Test</Typography>
      <TextField
        label="Test Name"
        value={testName}
        onChange={(e) => setTestName(e.target.value)}
        fullWidth
        sx={{ mb: '1rem' }}
      />
      <TextField
        label="Test Description"
        value={testDescription}
        onChange={(e) => setTestDescription(e.target.value)}
        fullWidth
        sx={{ mb: '1rem' }}
      />
      <Button variant="contained" onClick={handleCreateTest}>Create Test</Button>
    </Box>
  );
};

export default CreateTest;
