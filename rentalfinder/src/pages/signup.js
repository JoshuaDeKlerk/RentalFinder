//rentalfinder/src/pages/SignUp.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import '../css/signIn.css';
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import EmailIcon from "../assets/signup/Email.svg";
import PasswordIcon from "../assets/signup/Password.svg";

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
  id: yup.string().required('ID is required'),
  age: yup.number().required('Age is required').positive().integer(),
});

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSignUp = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/users/signup', data);
      login(response.data.user);
      alert(response.data.message);
      setLoading(false);
      navigate('/');
    } catch (error) {
      alert(error.response?.data.message || 'Error signing up');
      setLoading(false);
    }
  };

  return (
    <div className='SignInContainer'>
      <div className='LogInContainer'>
        <div className='LogInNavigatorContainer'>
          <div className='LogInText'>
            <div className='LoginTitleCont'>
              Sign Up for an Account
            </div>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className='LogInFormCont'>
              <div className='EmailFormCont'>
                <div className='InputEmail'>
                  <input
                    type="text"
                    placeholder="Username"
                    {...register('username')}
                  />
                </div>
                <p>{errors.username?.message}</p>
              </div>
              <div className='EmailFormCont'>
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
              <div className='PasswordFormCont'>
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
              <div className='PasswordFormCont'>
                <div className='InputPassword'>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    {...register('confirmPassword')}
                  />
                </div>
                <p>{errors.confirmPassword?.message}</p>
                <div className='Icons'>
                  <img src={PasswordIcon} alt="Confirm Password" style={{ width: '100%' }} />
                </div>
              </div>
              <div className='EmailFormCont'>
                <div className='InputEmail'>
                  <input
                    type="text"
                    placeholder="ID"
                    {...register('id')}
                  />
                </div>
                <p>{errors.id?.message}</p>
              </div>
              <div className='EmailFormCont'>
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
            <div className='LogInButtonContainer'>
              <button className='LoginButtonCont1' type="submit" disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='SignUpContainer1'>
        <div className='SignUpNavigatorContainer'>
          <div className='LogoAndText'>
            <div className='LogoAndName'>
              <div className='LogoCont'>
                <img src={Logo} alt="WhiteLogo" style={{ width: '100%' }} />
              </div>
              <div className='LogoTitle'>
                Rental Finder
              </div>
            </div>
            <div className='Description'>
              <div className='DescriptionTitle'>
                Already have an account?
              </div>
              <div className='DescriptionText'>
                Login to access your account and start booking luxury cars!
              </div>
            </div>
          </div>
          <div className='SignUpButtonContainer'>
            <Link to="/signin">
              <button className='SignUpButtonCont'>
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;











