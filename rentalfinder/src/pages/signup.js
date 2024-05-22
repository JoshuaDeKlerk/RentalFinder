import React, { useState } from 'react';
import '../css/signUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import Email from "../assets/signup/Email.svg";
import Password from "../assets/signup/Password.svg";
import Username from "../assets/signup/Username.svg";

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (event) => {
    console.log('Sign Up button clicked!');
    try {
        const response = await axios.post('http://localhost:5000/api/users/register', {
            username,
            email,
            password,
        });
        console.log('User created successfully:', response.data);
    } catch (error) {
        console.error('Error creating user:', error);
      if (error.response && error.response.status === 500 && error.response.data.code === 'ERR_SSL_PROTOCOL_ERROR') {
        // Handle SSL protocol error
        console.error('SSL Protocol Error:', error);
        // You may want to display an error message to the user
      }
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='SignUpContainer'>
      <div className='LoginContainerButton'>
        <div className='DetailsContainer'>
          <div className='logo2'>
            <img src={Logo} alt="WhiteLogo" style={{ width: '100%' }} />
          </div>
          <div className='Title2'>
            <h1>Rental Finder</h1>
          </div>
          <div className='signinblock'>
            <p>Already have an account?</p>
          </div>
          <Link to="/signin">
            <p>
              <button className='buttonSignIn'>Log In</button>
            </p>
          </Link>
        </div>
      </div>
      <div className='FormContainer'>
        <div className='LogInText'>
          <div className='LoginTitle'>
            Login to Your Account
          </div>
          <div className='LoginSubtitle'>
            Login using social networks
          </div>
          <div className='LoginSocials'>
            <div className='socials'>
              <img src={Google} alt="Google" style={{ width: '100%' }} />
            </div>
            <div className='socials'>
              <img src={Facebook} alt="Facebook" style={{ width: '100%' }} />
            </div>
          </div>
          <div className='LoginSeparator'>
            OR
          </div>
        </div>
        <div className='LogInForm'>
          <div className='EmailForm'>
            <div className='InputEmail'>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='Icons'>
              <img src={Username} alt="Username" style={{ width: '100%' }} />
            </div>
          </div>
          <div className='EmailForm'>
            <div className='InputEmail'>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='Icons'>
              <img src={Email} alt="Email" style={{ width: '100%' }} />
            </div>
          </div>
          <div className='PasswordForm'>
            <div className='InputPassword'>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className='Icons'>
              <img src={Password} alt="Password" style={{ width: '100%' }} />
            </div>
          </div>
          <div className='PasswordForm'>
            <div className='InputPassword'>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='Icons'>
              <img src={Password} alt="Password" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        <div className='SignUpButtonContainer'>
          <div className='SignUpButton' onClick={handleSignUp}>
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

