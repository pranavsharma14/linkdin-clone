import React, { } from 'react';
import { Typography, IconButton, Grid, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ExperienceSection = () => {

  const handleAddExperience = () => {
  };


return (
    <div>
        <Paper style={{marginBlock:'10px',padding:'10px'}}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={11} style={{ display: 'flex', flexDirection: 'column', padding:'20px'}}>
                    <Typography variant="h6">Experience</Typography>
                </Grid>   
                <Grid item xs={12} md={1}>
                    <IconButton color="primary" onClick={handleAddExperience}>
                        <EditIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    </div>
  );
};

export default ExperienceSection;
