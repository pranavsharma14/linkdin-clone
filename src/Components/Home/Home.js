import React from 'react'
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
        <IconButton size='large' onClick={() => navigate('/Profile')} style={{position:"absolute", right:"10px"}} >
          <PersonIcon />
        </IconButton>
    </>
  )
}

export default Home;