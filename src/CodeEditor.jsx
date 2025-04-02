import React, { useState, useEffect } from 'react';
import { MonacoEditor } from '@monaco-editor/react';
import { Box, Typography, Button } from '@mui/material';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import Timer from 'react-compound-timer';

const CodeEditor = ({ testId, timerDuration, onSubmit }) => {
  const [code, setCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Timer countdown logic
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitting) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isSubmitting]);

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await onSubmit(code, testId);
  };

  return (
    <Box sx={{ padding: '3rem', backgroundColor: '#FAFAFA', height: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: '2rem' }}>
        Solve the Problem
      </Typography>

      {/* Timer */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Timer initialTime={300000} direction="backward">
          {({ start, resume, pause, reset, getTime }) => (
            <>
              <Typography variant="h6">Time Remaining: {getTime() / 1000}s</Typography>
              <Button onClick={start}>Start</Button>
              <Button onClick={pause}>Pause</Button>
            </>
          )}
        </Timer>
      </Box>

      {/* Monaco Code Editor */}
      <MonacoEditor
        height="500px"
        language="javascript"
        value={code}
        onChange={handleCodeChange}
        options={{
          theme: 'vs-dark',
          selectOnLineNumbers: true,
        }}
      />

      {/* Submit Button */}
      <Box sx={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
          sx={{ padding: '0.8rem 2rem' }}
        >
          {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
        </Button>
      </Box>
    </Box>
  );
};


export default CodeEditor;
