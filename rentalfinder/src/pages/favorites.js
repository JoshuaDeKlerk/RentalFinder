import React from 'react';
import '../css/fav.css';



const FavoritePage = () => {
    return (
        <div className="container">
            <div className="profile">
                <img src="https://via.placeholder.com/55x55" alt="Profile Picture" />
                <div className="profile-info">
                    <div className="name">Ginger</div>
                </div>
            </div>
            <div className="navigation">
                <div className="nav-item">Home</div>
                <div className="nav-item">Search</div>
                <div className="nav-item active">Favourites</div>
                <div className="nav-item">Booking</div>
            </div>
            <div className="search-bar">
                <div className="search-input">
                    <div className="search-icon"></div>
                    <input type="text" placeholder="Search any car..." />
                </div>
                <div className="search-button"></div>
            </div>
            <div className="favorites-heading">Your Favourites</div>
        </div>
    );
}

export default FavoritePage;
