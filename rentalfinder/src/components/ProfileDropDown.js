//rentalfinder/src/components/ProfileDropDown.js

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './componentCSS/profileDropDown.css';

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const { user, logout, updateProfilePicture } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    alert('Logged out successfully');
    navigate('/signin');
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${user._id}`);
      alert('Account deleted successfully');
      logout();
      navigate('/signup');
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Error deleting account');
    }
  };

  const handleProfilePictureChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);
      formData.append('userId', user._id);

      try {
        const response = await axios.post('http://localhost:5000/upload/upload-profile-picture', formData);
        updateProfilePicture(response.data.profilePicture);
      } catch (error) {
        console.error('Error uploading profile picture:', error);
        alert('Error uploading profile picture');
      }
    }
  };

  return (
    <div className="profile-dropdown">
      <button className="dropdown-btn">Profile</button>
      <div className="dropdown-content">
        {user ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              style={{ display: 'none' }}
              id="profile-picture-input"
            />
            <label htmlFor="profile-picture-input">Change Profile Picture</label>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/signin')}>Sign In</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;












