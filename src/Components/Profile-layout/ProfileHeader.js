import React from 'react';
import { Avatar, Grid, IconButton, Typography,Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProfileHeader = ({ userData, onEdit }) => {

    const { firstname,lastname, additionalname, headline, location,company,college } = userData;

    return (
        <Paper style={{marginBlock:'5px',padding:'5px'}}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={11} style={{ display: 'flex', flexDirection: 'column', padding:'20px'}}>
                    <Avatar alt={firstname} src={userData.profileImage} sx={{ width: 100, height: 100, mr: 2 }} />
                    <div style={{marginBlock:'20px' , marginInline:'20px'}}>
                        <Typography variant="h5">{firstname} {lastname} {additionalname}</Typography>
                        <Typography variant="subtitle1">{headline}</Typography>
                        <Typography variant="body1">{location}</Typography>
                        <Typography variant="body1">{company}</Typography>
                        <Typography variant="body1">{college}</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={1}>
                    <IconButton color="primary" onClick={onEdit}>
                        <EditIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ProfileHeader;