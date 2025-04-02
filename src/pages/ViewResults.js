import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { get } from '../utils/request';  // Utility to fetch data
import { toast } from 'react-toastify';

const ViewResults = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the results
    const fetchResults = async () => {
      const response = await get('/results');  // Adjust URL for your backend
      if (response.ok) {
        setResults(response.data);
      } else {
        toast.error('Failed to fetch results.');
      }
      setLoading(false);
    };
    fetchResults();
  }, []);

  if (loading) return <CircularProgress />;
  if (!results) return <Typography>No results available.</Typography>;

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>My Results</Typography>
      {/* Render Results here */}
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </Box>
  );
};

export default ViewResults;
