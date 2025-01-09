import React from 'react';
import { Box, Typography } from '@mui/material';

interface LevelDisplayProps {
  currentLevel: number;
}

const LevelDisplay: React.FC<LevelDisplayProps> = ({ currentLevel }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#232a36',
        padding: '16px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '200px',
        marginLeft: '1rem',
      }}
    >
      <Typography variant="h6" color="#eee">
        Current Level: {currentLevel}
      </Typography>
    </Box>
  );
};

export default LevelDisplay;
