import React from 'react';
import { Typography, Grid, IconButton, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EducationSection = ({ userData, onEditEdu }) => {
  const { institution, degree, startDate, endDate} = userData;

  return (
    <div>
      <Paper style={{ marginBlock: '10px', padding: '10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={11} style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <Typography variant="h6">Education</Typography>
            <div>
                <Typography variant="body1">{degree}</Typography>
                <Typography variant="body2">{institution}</Typography>
                <Typography variant="body2">{startDate} - {endDate}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={1}>
            <IconButton color="primary" onClick={onEditEdu}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default EducationSection;
