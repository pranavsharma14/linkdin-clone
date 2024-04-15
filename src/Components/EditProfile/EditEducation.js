import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Grid, Button, TextField } from '@mui/material';

const EditEducation = ({ userData, onSave, onClose }) => {
  const [newEducation, setNewEducation] = useState(userData || { institution: '', degree: '', startDate: '', endDate: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEducation((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
      await onSave(newEducation);
      onClose();
  }

  return (
    <div>
      <Dialog open={true} onClose={onClose}>
        <DialogTitle>Edit Education</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Institution"
                name="institution"
                value={newEducation.institution}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Degree"
                name="degree"
                value={newEducation.degree}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Date"
                name="startDate"
                value={newEducation.startDate}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="End Date"
                name="endDate"
                value={newEducation.endDate}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
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
    </div>
  );
};

export default EditEducation;