import React, { useState } from 'react';
import '../css/signUp.css';
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import Email from "../assets/signup/Email.svg";
import Password from "../assets/signup/Password.svg";
import Username from "../assets/signup/Username.svg";

function SignUp() {

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
          <button className='buttonSignIn'>Log In</button>
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
                            <input type="email" placeholder="Username" />
                        </div>
                        <div className='Icons'>
                            <img src={Username} alt="Username" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className='EmailForm'>
                        <div className='InputEmail'>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className='Icons'>
                            <img src={Email} alt="Email" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className='PasswordForm'>
                        <div className='InputPassword'>
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <div className='Icons'>
                            <img src={Password} alt="Password" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className='PasswordForm'>
                        <div className='InputPassword'>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className='Icons'>
                            <img src={Password} alt="Password" style={{ width: '100%' }} />
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
  );
}

export default SignUp;

