import React from 'react';
import '../css/signIn.css';
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import Email from "../assets/signin/Email.svg";
import Password from "../assets/signin/Password.svg";

function signIn() {
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
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className='Icons'>
                            <img src={Email} alt="Email" style={{ width: '100%' }} />
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
                <div className='LogInButtonContainer'>
                    <div className='LoginButton'>
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

export default signIn;