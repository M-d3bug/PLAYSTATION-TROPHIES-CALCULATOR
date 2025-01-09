import React from 'react';
import { Box, Typography } from '@mui/material';

interface MilestoneBoxProps {
  milestones: string[];
}

const MilestoneBox: React.FC<MilestoneBoxProps> = ({ milestones }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#232a36',
        borderRadius: '4px',
        padding: '16px',
        marginTop: '16px',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      }}
    >
      <Typography variant="h6" color="#eee">
        Upcoming Milestones
      </Typography>
      {milestones.length > 0 ? (
        milestones.map((milestone, index) => (
          <Typography key={index} color="#eee">
            - {milestone}
          </Typography>
        ))
      ) : (
        <Typography color="#bdbdbd">No upcoming milestones</Typography>
      )}
    </Box>
  );
};

export default MilestoneBox;
