import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import '../css/signIn.css';
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import EmailIcon from "../assets/signin/Email.svg";
import PasswordIcon from "../assets/signin/Password.svg";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); 

  const handleSignIn = () => {
    const userData = JSON.parse(localStorage.getItem('userData')); 

    if (userData && userData.email === email && userData.password === password) {
      
      history.push('/home'); 
    } else {
      alert('Username or password is incorrect. Please try again.'); 
    }
  };

  return (
    <div className='SignInContainer'>
      <div className='LogInContainer'>
        <div className='LogInNavigatorContainer'>
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
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='Icons'>
                <img src={EmailIcon} alt="Email" style={{ width: '100%' }} />
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
                <img src={PasswordIcon} alt="Password" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
          <div className='LogInButtonContainer'>
            <div className='LoginButton' onClick={handleSignIn}>
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className='SignUpContainer'>
        <div className='SignUpNavigatorContainer'>
          <div className='LogoAndText'>
            <div className='LogoAndName'>
              <div className='Logo'>
                <img src={Logo} alt="WhiteLogo" style={{ width: '100%' }} />
              </div>
              <div className='LogoTitle'>
                Rental Finder
              </div>
            </div>
            <div className='Description'>
              <div className='DescriptionTitle'>
                New Here?
              </div>
              <div className='DescriptionText'>
                Sign up to discover our collection of luxury cars that are available!
              </div>
            </div>
          </div>
          <div className='SignUpButtonContainer'>
            <div className='SignUpButton'>
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
