import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography, Paper, Avatar } from '@mui/material';
import { AccountCircleOutlined } from '@mui/icons-material';
import '@fontsource/roboto/500.css';
import Divider from '@mui/material/Divider';
import GoogleButton from 'react-google-button'
import {useNavigate} from "react-router-dom";


const SignupPage = () => {
  let navigate = useNavigate();

  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    console.log('Name:', Name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Re-Enter Password:', repassword);
  };

  return (
    <div>
      <Paper className="paper" style={{ width: "350px",margin: "20px auto",padding: "20px",display: "flex",flexDirection:"column", alignItems: "center",border: "1px solid"}}>
        
        <Avatar>
          <AccountCircleOutlined/>
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Make the most of your professional life.
        </Typography>
        <form onSubmit={handleSignup}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Your Name"
              variant="outlined"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              size="small"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              size="small"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Re-Enter Password"
              variant="outlined"
              type="password"
              value={repassword}
              size="small"
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
          </FormControl>

          <div style={{marginInline:"50px", marginBlock:"15px"}}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Agree & Join
            </Button>
          </div>

          <div style={{marginBlock:"10px"}}> <Divider>or</Divider></div>

          <div style={{marginInline:"55px", marginBlock:"5px"}}>
            <GoogleButton
            style={{borderRadius:"5px"}}
              type="light" 
              onClick={() => { console.log('Google button clicked') }}
            />
          </div>

          <div style={{marginInline:"70px", marginBlock:"10px"}}>
            <Typography variant="body2" gutterBottom fullWidth>   Already on Linkedin ? <span style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate('/')}>Sign in</span>
            </Typography>
          </div>
        </form>
      </Paper>      
    </div>
  );
};

export default SignupPage;