import React, { useEffect, useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import axios from 'axios';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import { useNavigate } from "react-router-dom";
import ProfileHeader from '../Profile-layout/ProfileHeader';
import EditProfile from '../EditProfile/EditProfile';
import AboutSection from '../Profile-layout/AboutSection';
import ExperienceSection from '../Profile-layout/ExperienceSection';
import EditEducation from '../EditProfile/EditEducation';
import EducationSection from '../Profile-layout/EducationSection';
import SkillsSection from '../Profile-layout/SkillsSection';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditEducation, setIsEditEducation] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/userData');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const onEdit = () => {
    setIsEditOpen(!isEditOpen);
  };

  const onEditEdu = () => {
    setIsEditEducation(!isEditEducation);
  };

  return (
      <Grid container spacing={2} style={{margin:'5px'}}>
        <Grid item xs={12}>
          <IconButton onClick={() => navigate('/Home')} style={{marginBottom:'15px'}}>
            <ArrowBackIosSharpIcon />
          </IconButton>
          {isEditOpen ? (
            <EditProfile userData={userData} onSave={setUserData} onClose={onEdit} />
          ) : (
            <ProfileHeader userData={userData} onEdit={onEdit} />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutSection userData={userData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ExperienceSection />
        </Grid>
        <Grid item xs={12} md={6}>
        {isEditEducation ? (
          <EditEducation userData={userData} onSave={setUserData} onClose={onEditEdu} />
        ) : (
          <EducationSection userData={userData} onEditEdu={onEditEdu} />
        )}
        </Grid>
        <Grid item xs={12} md={6}>
          <SkillsSection />
        </Grid>
      </Grid>
  );
};

export default Profile;