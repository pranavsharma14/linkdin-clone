import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography, Paper, Avatar} from '@mui/material';
import '@fontsource/roboto/500.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Divider from '@mui/material/Divider';
import GoogleButton from 'react-google-button'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    console.log('Email:', email);
    console.log('Password:', password);
    // ...
  };

  return (
    <div>
      <Paper style={{ width: "300px", margin: "20px auto", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid" }}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Sign in
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Stay updated on your professional World.
        </Typography>
        <form onSubmit={handleLogin}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              size="small"
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal" className="form-control">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              size="small"
              required
            />
          </FormControl>

          <div style={{ marginInline: "50px", marginBlock: "20px" }}>
            <Button variant="contained" color="primary" type="submit" style={{ borderRadius: 40 }} fullWidth onClick={() => navigate('/Home')}>
              Sign in to Linkedin
            </Button>
          </div>

          <div style={{ marginBlock: "20px" }}><Divider>or</Divider></div>

          <div style={{ marginInline: "30px", marginBlock: "10px" }}>
            <GoogleButton
              style={{ borderRadius: "5px" }}
              type="light"
              onClick={() => { console.log('Google button clicked') }}
            />
          </div>
          <div style={{ marginInline: "60px", marginBlock: "20px" }}>
            <Typography variant="body2" gutterBottom>   New to Linkedin ? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate('/Signup')}>Join Now</span>
            </Typography>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;