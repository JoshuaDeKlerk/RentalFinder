import React, { useState } from 'react';
import '../css/signUp.css';
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import Email from "../assets/signin/Email.svg";
import Password from "../assets/signin/Password.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <form id="signin-form">
          <div className="form-group">
            <label htmlFor="username"><i className="fa fa-user"></i> Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password"><i className="fa fa-lock"></i> Password</label>
            <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" required />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password"><i className="fa fa-lock"></i> Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

