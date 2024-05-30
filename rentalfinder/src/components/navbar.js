import React, { useContext } from 'react';
import './componentCSS/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import LogoBlue from "../assets/logo/LogoBlue.svg";
import { DarkMode } from './darkmode';
import ProfileDropdown from './ProfileDropDown';
import { AuthContext } from '../context/AuthContext';

function NavBar({ isDark, setIsDark }) {
    const location = useLocation();
    const { user } = useContext(AuthContext);

    return (
        <div className="NavBar" data-theme={isDark ? "dark" : "light"}>
            <div className="NavBarLeft">
                <div className="ProfileContainer">
                    <div className="ProfilePic">
                        {user?.profilePicture ? (
                            <img src={user.profilePicture} alt="Profile" />
                        ) : (
                            <div className="DefaultProfilePic"></div>
                        )}
                    </div>
                    <div className="ProfileName">
                        <h1>{user ? user.username : 'Guest'}</h1>
                        {user && <ProfileDropdown />}
                    </div>
                </div>
                <div className="LocationContainer">
                    <div className="LocationIcon">
                        <img src={LogoBlue} alt="BlueLogo" style={{ width: '100%' }} />
                    </div>
                    <div className="LocationData">
                        <div className="LocationTitle"><p>Location</p></div>
                        <div className="LocationText"><h3>Pretoria</h3></div>
                    </div>
                </div>
            </div>
            <div className="NavBarCenter">
                <div className="NavTextContainer">
                    <Link to="/" className={`CenterText ${location.pathname === "/" ? "active" : ""}`}>
                        <h2>Home</h2>
                        <div className="CenterIcon">
                            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.351 0.620849C9.79569 0.459717 9.20413 0.459717 8.64886 0.620849C8.28021 0.727835 7.97352 0.912164 7.68669 1.12263C7.41665 1.32078 7.11229 1.58215 6.7622 1.8828L6.73588 1.9054L1.93437 6.02826L1.8711 6.08252C1.53328 6.37211 1.23794 6.62528 1.01843 6.94259C0.827522 7.21858 0.684347 7.52558 0.59756 7.85143C0.499216 8.22085 0.499611 8.60492 0.50006 9.0406L0.500121 9.13013L0.50012 14.6058C0.500108 15.0363 0.500097 15.4076 0.521471 15.715C0.543977 16.0387 0.593524 16.3624 0.728495 16.6822C1.0327 17.4028 1.61602 17.9767 2.35167 18.2758C2.67763 18.4083 3.00757 18.4569 3.33742 18.479C3.65069 18.5 4.0292 18.5 4.46784 18.5H4.53179C4.97046 18.5 5.34906 18.5 5.66244 18.479C5.99231 18.457 6.32244 18.4084 6.64848 18.2758C7.38412 17.9767 7.96735 17.4029 8.27155 16.6822C8.40654 16.3625 8.45608 16.0388 8.47862 15.7151C8.50005 15.4073 8.50004 15.0354 8.50002 14.6043V13.593C8.50002 13.0511 8.9477 12.6117 9.50001 12.6117C10.0523 12.6117 10.5 13.0511 10.5 13.593V14.6058C10.5 15.0362 10.5 15.4076 10.5213 15.715C10.5438 16.0386 10.5933 16.3624 10.7283 16.6822C11.0326 17.403 11.6159 17.9767 12.3515 18.2758C12.6775 18.4083 13.0075 18.4569 13.3373 18.479C13.6506 18.5 14.0291 18.5 14.4677 18.5H14.5316C14.9703 18.5 15.3489 18.5 15.6623 18.479C15.9922 18.457 16.3223 18.4084 16.6484 18.2758C17.3841 17.9767 17.9674 17.4026 18.2715 16.6821C18.4064 16.3623 18.456 16.0387 18.4785 15.7151C18.4999 15.4073 18.4999 15.0355 18.4999 14.6045V9.13013L18.5 9.04653C18.5003 8.60707 18.5006 8.22191 18.402 7.85123C18.3157 7.52735 18.1738 7.22004 17.9818 6.94243C17.7622 6.62511 17.4668 6.37198 17.1288 6.08225L17.0658 6.0282L12.2659 1.90675L12.2404 1.88485C11.8893 1.5834 11.5843 1.32147 11.3138 1.12295C11.0266 0.912299 10.7198 0.727878 10.351 0.620849ZM8.88435 2.69444C9.07519 2.5544 9.16483 2.51776 9.21598 2.50291C9.40108 2.44921 9.59872 2.4492 9.78381 2.5029C9.83512 2.5178 9.925 2.55456 10.1162 2.69482C10.3174 2.84245 10.5641 3.05336 10.9489 3.38376L15.7488 7.50528C16.1889 7.88305 16.2716 7.96462 16.3273 8.04505C16.391 8.13721 16.4382 8.23929 16.4671 8.34769C16.492 8.44171 16.4999 8.55702 16.4999 9.13013V14.5745C16.4999 15.045 16.4994 15.3488 16.4832 15.5813C16.4676 15.8046 16.4411 15.89 16.4238 15.9311C16.322 16.1722 16.1272 16.3633 15.8829 16.4626C15.8414 16.4795 15.7544 16.5057 15.5262 16.521C15.2891 16.5368 14.9793 16.5374 14.4997 16.5374C14.0201 16.5374 13.7105 16.5368 13.4735 16.521C13.2455 16.5057 13.1587 16.4796 13.1172 16.4627C12.8727 16.3633 12.6778 16.1722 12.5761 15.9311C12.5588 15.8903 12.5322 15.8051 12.5167 15.5814C12.5005 15.3489 12.5 15.045 12.5 14.5744V13.593C12.5 11.9671 11.1569 10.6491 9.50001 10.6491C7.84315 10.6491 6.50005 11.9671 6.50005 13.593V14.5744C6.50005 15.045 6.49948 15.3488 6.48329 15.5813C6.46772 15.805 6.4411 15.8902 6.42385 15.9311C6.32208 16.1722 6.12737 16.3633 5.88298 16.4626C5.84148 16.4795 5.7545 16.5057 5.52631 16.521C5.2892 16.5368 4.97943 16.5374 4.49981 16.5374C4.02019 16.5374 3.71058 16.5368 3.47362 16.521C3.24564 16.5057 3.15886 16.4796 3.11728 16.4627C2.8729 16.3633 2.67801 16.1722 2.57624 15.9312C2.55897 15.8902 2.53235 15.8049 2.51681 15.5814C2.50064 15.3489 2.5001 15.0451 2.5001 14.5745V9.13013C2.5001 8.5547 2.50771 8.44105 2.5326 8.34749C2.56097 8.24102 2.60829 8.13868 2.67317 8.04488C2.72875 7.96455 2.81133 7.88311 3.25136 7.50528L8.05292 3.38239C8.43716 3.05244 8.68343 2.84186 8.88435 2.69444Z"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className="NavTextContainer">
                    <Link to="/search" className={`CenterText ${location.pathname === "/search" ? "active" : ""}`}>
                        <h2>Search</h2>
                        <div className="CenterIcon">
                            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.21429 3.07143C5.37396 3.07143 3.07143 5.37396 3.07143 8.21429C3.07143 11.0546 5.37397 13.3571 8.21429 13.3571C11.0546 13.3571 13.3571 11.0546 13.3571 8.21429C13.3571 5.37397 11.0546 3.07143 8.21429 3.07143ZM0.5 8.21429C0.5 3.9538 3.9538 0.5 8.21429 0.5C12.4747 0.5 15.9286 3.9538 15.9286 8.21429C15.9286 9.88314 15.3986 11.4282 14.4979 12.6904L18.1221 16.3038C18.6249 16.8051 18.6261 17.6192 18.1248 18.1221C17.6234 18.6249 16.8094 18.6261 16.3065 18.1248L12.6778 14.5069C11.4179 15.4022 9.87755 15.9286 8.21429 15.9286C3.9538 15.9286 0.5 12.4747 0.5 8.21429Z"/>
                            </svg>
                        </div>
                    </ Link>
                </div>
                <div className="NavTextContainer">
                    <Link to="/favorites" className={`CenterText ${location.pathname === "/favorites" ? "active" : ""}`}>
                        <h2>Favorites</h2>
                        <div className="CenterIcon">
                            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.49956 2.06454C11.4058 0.246825 14.1855 -0.179728 16.4179 1.8787C18.8658 4.13573 19.1602 7.98813 17.2749 10.6795C16.5631 11.6956 15.1784 13.2165 13.8536 14.6038C12.5114 16.0092 11.1725 17.3371 10.5123 17.9857C10.508 17.99 10.5034 17.9945 10.4988 17.9989C10.4375 18.0592 10.3578 18.1377 10.2808 18.2019C10.1875 18.2798 10.0506 18.3792 9.86659 18.44C9.74962 18.4786 9.63007 18.4981 9.51223 18.4999C9.38281 18.5018 9.25103 18.4825 9.12239 18.4399C8.93864 18.3792 8.80175 18.2799 8.70841 18.202C8.63119 18.1375 8.55122 18.0588 8.48974 17.9983C8.48537 17.994 8.48109 17.9898 8.47691 17.9857C7.81668 17.3371 6.47776 16.0092 5.13563 14.6038C3.81073 13.2165 2.42611 11.6956 1.71433 10.6795C-0.178961 7.97676 0.170286 4.15434 2.56185 1.88746C4.77041 -0.205964 7.58872 0.247149 9.49956 2.06454ZM8.81712 4.12839C7.44392 2.34741 5.29698 1.92623 3.72899 3.41248C2.06236 4.99223 1.84027 7.60115 3.13391 9.44788C3.74698 10.323 5.02953 11.7422 6.3691 13.1449C7.5832 14.4162 8.7978 15.6263 9.4946 16.3132C10.1914 15.6263 11.406 14.4162 12.6201 13.1449C13.9596 11.7422 15.2422 10.323 15.8553 9.44788C17.1569 7.58977 16.9496 4.97038 15.2695 3.42125C13.6581 1.93548 11.5498 2.35588 10.1832 4.12839C10.0122 4.35014 9.7627 4.47774 9.50014 4.47774C9.23757 4.47774 8.9881 4.35014 8.81712 4.12839Z"/>
                            </svg>

                        </div>
                    </Link>
                </div>
                <div className="NavTextContainer">
                    <Link to="/booking" className={`CenterText ${location.pathname === "/booking" ? "active" : ""}`}>
                        <h2>Booking</h2>
                        <div className="CenterIcon">
                            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.375 18.5C1.85937 18.5 1.41812 18.3239 1.05125 17.9717C0.684375 17.6195 0.500625 17.1956 0.5 16.7V2.3C0.5 1.805 0.68375 1.3814 1.05125 1.0292C1.41875 0.677 1.86 0.5006 2.375 0.5H13.625C14.1406 0.5 14.5822 0.6764 14.9497 1.0292C15.3172 1.382 15.5006 1.8056 15.5 2.3V16.7C15.5 17.195 15.3166 17.6189 14.9497 17.9717C14.5828 18.3245 14.1412 18.5006 13.625 18.5H2.375ZM2.375 16.1C2.375 16.4314 2.65482 16.7 3 16.7H13C13.3452 16.7 13.625 16.4314 13.625 16.1V2.9C13.625 2.56863 13.3452 2.3 13 2.3H12.375C12.0298 2.3 11.75 2.56863 11.75 2.9V8.38806C11.75 8.48133 11.644 8.53895 11.5607 8.49096L9.72781 7.43522C9.52988 7.32121 9.28262 7.32121 9.08469 7.43522L7.25181 8.49096C7.1685 8.53895 7.0625 8.48133 7.0625 8.38806V2.9C7.0625 2.56863 6.78268 2.3 6.4375 2.3H3C2.65482 2.3 2.375 2.56863 2.375 2.9V16.1Z"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="NavBarRight">
                <div className="ThemeTogglerContainer">
                    <DarkMode 
                        isChecked={isDark} 
                        handleChange={() => setIsDark(!isDark)}
                    />
                </div>
                <div className="SearchContainer">
                    <div className='InputEmail'>
                        <input
                            type="text"
                            placeholder="Search..."
                        />
                    </div>
                    <div className='IconSearch'>
                        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.21429 3.07143C5.37396 3.07143 3.07143 5.37396 3.07143 8.21429C3.07143 11.0546 5.37397 13.3571 8.21429 13.3571C11.0546 13.3571 13.3571 11.0546 13.3571 8.21429C13.3571 5.37397 11.0546 3.07143 8.21429 3.07143ZM0.5 8.21429C0.5 3.9538 3.9538 0.5 8.21429 0.5C12.4747 0.5 15.9286 3.9538 15.9286 8.21429C15.9286 9.88314 15.3986 11.4282 14.4979 12.6904L18.1221 16.3038C18.6249 16.8051 18.6261 17.6192 18.1248 18.1221C17.6234 18.6249 16.8094 18.6261 16.3065 18.1248L12.6778 14.5069C11.4179 15.4022 9.87755 15.9286 8.21429 15.9286C3.9538 15.9286 0.5 12.4747 0.5 8.21429Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
