import React from 'react';
import { Typography,Paper } from '@mui/material';

const AboutSection = ({ userData }) => {
  const { about } = userData;

  return (
    <div>
        <Paper style={{marginBlock:'8px',padding:'10px'}}>
            <Typography variant="h6">About</Typography>
            <Typography variant="body1">{about}</Typography>
        </Paper>
    </div>
  );
};

export default AboutSection;