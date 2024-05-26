import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../css/signUp.css';
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import Email from "../assets/signup/Email.svg";
import Password from "../assets/signup/Password.svg";
import Username from "../assets/signup/Username.svg";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Confirm Password is required"),
  idOrDriversLicense: yup.string().required("ID or Driver’s License is required"),
  age: yup.number().min(18, "You must be at least 18").required("Age is required"),
});

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/users/register', data, { timeout: 5000 });
      console.log('User created successfully:', response.data);
      setLoading(false);
      navigate('/signin');
    } catch (error) {
      console.error('Error creating user:', error);
      setLoading(false);
    }
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
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className='LogInForm'>
            <div className='EmailForm'>
              <div className='InputEmail'>
                <input
                  type="text"
                  placeholder="Username"
                  {...register('username')}
                />
              </div>
              <p>{errors.username?.message}</p>
              <div className='Icons'>
                <img src={Username} alt="Username" style={{ width: '100%' }} />
              </div>
            </div>
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
                <img src={Email} alt="Email" style={{ width: '100%' }} />
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
                <img src={Password} alt="Password" style={{ width: '100%' }} />
              </div>
            </div>
            <div className='PasswordForm'>
              <div className='InputPassword'>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...register('confirmPassword')}
                />
              </div>
              <p>{errors.confirmPassword?.message}</p>
              <div className='Icons'>
                <img src={Password} alt="Password" style={{ width: '100%' }} />
              </div>
            </div>
            <div className='EmailForm'>
              <div className='InputEmail'>
                <input
                  type="text"
                  placeholder="ID or Driver’s License"
                  {...register('idOrDriversLicense')}
                />
              </div>
              <p>{errors.idOrDriversLicense?.message}</p>
            </div>
            <div className='EmailForm'>
              <div className='InputEmail'>
                <input
                  type="number"
                  placeholder="Age"
                  {...register('age')}
                />
              </div>
              <p>{errors.age?.message}</p>
            </div>
          </div>
          <div className='SignUpButtonContainer'>
            <button className='SignUpButton' type="submit" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;






