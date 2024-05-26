import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../css/signIn.css';
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import EmailIcon from "../assets/signin/Email.svg";
import PasswordIcon from "../assets/signin/Password.svg";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/users/signin', data);
      alert(response.data.message);
      setLoading(false);
      // Navigate to home after successful sign-in
      navigate('/');
    } catch (error) {
      alert(error.response?.data.message || 'Error signing in');
      setLoading(false);
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
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className='LogInForm'>
              <div className='EmailForm'>
                <div className='InputEmail'>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                  />
                </div>
                <p>{errors.email?.message}</p>
                <div className='Icons'>
                  <img src={EmailIcon} alt="Email" style={{ width: '100%' }} />
                </div>
              </div>
              <div className='PasswordForm'>
                <div className='InputPassword'>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                  />
                </div>
                <p>{errors.password?.message}</p>
                <div className='Icons'>
                  <img src={PasswordIcon} alt="Password" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
            <div className='LogInButtonContainer'>
              <button className='LoginButton' type="submit" disabled={loading}>
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
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
            <Link to="/">
              <button className='SignUpButton'>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;








