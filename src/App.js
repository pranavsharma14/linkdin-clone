import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Remove the extra semicolon
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import EditProfile from './Components/EditProfile/EditProfile';
import EditEducation from './Components/EditProfile/EditEducation';
import LoginPage from './Components/Signin-Signup/SigninPage';
import SignupPage from './Components/Signin-Signup/SignupPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="Signup" element={<SignupPage />} />
        <Route path="Home" element={<Home />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="EditProfile" element={<EditProfile />} />
        <Route path="EditEducation" element={<EditEducation />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);