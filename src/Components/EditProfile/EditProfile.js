import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Grid, Button, TextField,Typography } from '@mui/material';

const EditProfile = ({ userData, onSave, onClose }) => {
  const [editedData, setEditedData] = useState(userData || { firstname:'', lastname: '',additionalname:'', headline: '', location: '', company:'',college:'',about:'' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    await onSave(editedData);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Edit intro</DialogTitle>
      <DialogContent>
      <Typography variant="body1" m={2}>*Indicates required</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="First Name*"
              name="firstname"
              value={editedData.firstname}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name*"
              name="lastname"
              value={editedData.lastname}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Additional Name"
              name="additionalname"
              value={editedData.additionalname}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Headline*"
              name="headline"
              value={editedData.headline}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Location"
              name="location"
              value={editedData.location}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company"
              name="company"
              value={editedData.company}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="College"
              name="college"
              value={editedData.college}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="About me"
              name="about"
              value={editedData.about}
              onChange={handleInputChange}
              fullWidth
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;