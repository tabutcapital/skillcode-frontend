import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import CodeEditor from './CodeEditor';

const TakeTestPage = () => {
  const { testId } = useParams();
  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestData = async () => {
      // Fetch test data from the backend using the testId
      const response = await fetch(`/api/tests/${testId}`);
      const testData = await response.json();
      setTest(testData);
      setLoading(false);
    };

    fetchTestData();
  }, [testId]);

  const handleSubmit = async (code, testId) => {
    // Send the code to the backend for evaluation
    const response = await fetch(`/api/tests/${testId}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const result = await response.json();
    alert(result.message);  // You can improve this by showing the result on the page.
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4">{test.name}</Typography>
      <Typography variant="body1">{test.description}</Typography>
      {test.questions.map((question, index) => (
        <Box key={index} sx={{ marginTop: '2rem' }}>
          <Typography variant="h6">Question {index + 1}: {question.name}</Typography>
          <CodeEditor
            testId={testId}
            timerDuration={question.timeLimit}
            onSubmit={handleSubmit}
          />
        </Box>
      ))}
    </Box>
  );
};

export default TakeTestPage;
