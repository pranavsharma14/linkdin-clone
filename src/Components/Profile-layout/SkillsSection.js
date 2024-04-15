import React from 'react';
import { Typography, Grid,IconButton, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const SkillsSection = ({onEditSk }) => {

  return (
    <div>
        <Paper style={{marginBlock:'10px',padding:'15px'}}>
          <Grid container spacing={2} >
            <Grid item xs={12} md={11} style={{ display: 'flex', flexDirection: 'column', padding:'20px'}}>
              <Typography variant="h6">Skills</Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <IconButton color="primary" onClick={onEditSk}>
                  <EditIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
    </div>
  );
};

export default SkillsSection;