import React, { useState } from 'react';
import '../css/signIn.css';
import Logo from "../assets/logo/LogoWhite.svg";
import Google from "../assets/logo/Google.svg";
import Facebook from "../assets/logo/Facebook.svg";
import EmailIcon from "../assets/signin/Email.svg";
import PasswordIcon from "../assets/signin/Password.svg";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory(); 

  const handleSignIn = () => {
    const userData = JSON.parse(localStorage.getItem('userData')); 

    if (userData && userData.email === email && userData.password === password) {
      
      alert('Well Done')
    } else {
      alert('Username or password is incorrect. Please try again.'); 
    }
  };

  return (
    <div className='SignInContainer'>
      <div className='LogInContainer'>
        <div className='LogInNavigatorContainer'>
          <div className='LogInText'>
            <div className='LoginTitleCont'>
              Login to Your Account
            </div>
            <div className='LoginSubtitleCont'>
              Login using social networks
            </div>
            <div className='LoginSocialsCont'>
              <div className='socials'>
                <img src={Google} alt="Google" style={{ width: '100%' }} />
              </div>
              <div className='socials'>
                <img src={Facebook} alt="Facebook" style={{ width: '100%' }} />
              </div>
            </div>
            <div className='LoginSeparatorCont'>
              OR
            </div>
          </div>
          <div className='LogInFormCont'>
            <div className='EmailFormCont'>
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
            <div className='PasswordFormCont'>
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
            <div className='LoginButtonCont' onClick={handleSignIn}>
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className='SignUpContainer1'>
        <div className='SignUpNavigatorContainer'>
          <div className='LogoAndText'>
            <div className='LogoAndName'>
              <div className='LogoCont'>
              <svg width="233" height="250" viewBox="0 0 233 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M123.214 244.057L123.216 244.059C123.724 244.586 124.232 245.112 124.74 245.64" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M146.723 244.059C146.215 244.586 145.707 245.112 145.199 245.64C139.593 251.453 130.346 251.453 124.74 245.64C124.232 245.112 123.724 244.586 123.216 244.059L123.214 244.057C112.072 232.504 101.136 221.163 90.992 209.843C88.2604 206.795 84.3985 205.025 80.3353 205.025H44.3268C37.8927 205.025 32.6768 199.74 32.6768 193.219V192.931C32.6768 186.57 37.7655 181.413 44.0427 181.413H47.7375C51.9741 181.413 55.4085 177.932 55.4085 173.639C55.4085 169.346 51.9741 165.865 47.7375 165.865H25.0058C18.2573 165.865 12.7866 160.321 12.7866 153.482C12.7866 146.643 18.2573 141.099 25.0058 141.099H29.8354C36.8972 141.099 42.6219 135.297 42.6219 128.141C42.6219 120.984 36.8972 115.183 29.8354 115.183H12.7866C5.72475 115.183 0 109.381 0 102.225C0 95.0682 5.72475 89.2667 12.7866 89.2667H29.8354C36.8972 89.2667 42.6219 83.4651 42.6219 76.3086C42.6219 69.1521 36.8972 63.3505 29.8354 63.3505H24.1524C17.8753 63.3505 12.7866 58.1936 12.7866 51.8323C12.7866 45.4709 17.8753 40.314 24.1524 40.314H59.7166C64.3992 40.314 68.1951 36.4671 68.1951 31.7218C68.1951 26.9402 64.3433 23.0786 59.6253 23.13L57.5396 23.1528C51.6734 23.2168 46.8841 18.4153 46.8841 12.47V11.5719C46.8841 5.18092 51.9965 0 58.3029 0H134.97C189.11 0 233 45.8965 233 102.513C233 154.593 191.523 197.604 146.723 244.059ZM135.098 111.977C140.342 111.977 144.587 107.675 144.587 102.361C144.587 97.0466 140.342 92.7395 135.098 92.7395C129.85 92.7395 125.604 97.0466 125.604 102.361C125.604 107.675 129.85 111.977 135.098 111.977ZM75.6878 69.9685C73.8803 69.3754 72.4446 67.9826 71.7782 66.182C71.4363 65.2343 71.3242 64.2326 71.4354 63.2581C71.4745 62.9163 73.2776 59.0249 73.4725 58.7431C82.8646 45.1344 96.5435 34.7904 112.507 29.6885C113.188 29.4718 117.809 28.8574 118.497 29.0504C119.288 29.2724 120.038 29.6546 120.698 30.1883C122.191 31.3745 123.06 33.1958 123.06 35.1147V71.1388C123.06 74.4925 121.468 77.6445 118.795 79.6255C116.117 81.5962 112.666 82.143 109.514 81.1165L75.6878 69.9685ZM108.72 111.053C107.697 107.854 105.227 105.347 102.077 104.321L68.2645 93.188C66.4625 92.595 64.4926 92.8735 62.9144 93.9305C62.2099 94.4072 61.618 95.0174 61.1641 95.7177C60.7785 96.3127 59.9279 100.967 59.9208 101.679C59.768 118.641 65.2559 135.011 75.122 148.279C75.3226 148.549 78.412 151.489 78.7146 151.631C79.5994 152.044 80.577 152.246 81.5717 152.205C83.4699 152.128 85.2263 151.178 86.336 149.62L107.248 120.447C109.193 117.739 109.738 114.236 108.72 111.053ZM135.1 130.472C138.409 130.472 141.52 132.081 143.475 134.79L164.376 163.958C165.486 165.511 165.847 167.492 165.338 169.349C165.072 170.325 164.58 171.209 163.916 171.935C163.696 172.175 159.959 174.246 159.653 174.353C144.162 179.764 127.103 180.002 111.231 174.611C110.551 174.381 106.459 172.132 106.011 171.565C105.498 170.914 105.112 170.158 104.887 169.333C104.368 167.476 104.725 165.484 105.835 163.932L126.736 134.79C128.676 132.081 131.787 130.472 135.1 130.472ZM201.954 93.178L168.122 104.321C164.976 105.348 162.497 107.855 161.483 111.054C160.455 114.237 161 117.739 162.954 120.442L183.841 149.59C184.961 151.153 186.718 152.087 188.616 152.18C189.459 152.217 190.287 152.077 191.057 151.782C191.721 151.527 195.095 148.276 195.519 147.697C205.481 134.063 210.546 117.538 210.256 100.942C210.25 100.594 209.461 96.3966 209.294 96.0926C208.818 95.2257 208.142 94.4753 207.304 93.9156C205.726 92.8635 203.761 92.5794 201.954 93.178ZM160.681 81.1169C157.53 82.1434 154.088 81.5917 151.405 79.6259C148.728 77.6449 147.135 74.4923 147.135 71.1356V35.0797C147.135 33.1657 148 31.3444 149.492 30.1631C150.271 29.5318 151.178 29.1102 152.133 28.9162C152.459 28.8499 156.677 29.3844 156.995 29.4822C172.665 34.3367 186.603 44.3137 196.315 58.1346C196.737 58.7314 198.739 62.9651 198.773 63.6981C198.813 64.533 198.687 65.3777 198.392 66.1824C197.726 67.9824 196.29 69.3801 194.483 69.9689L160.681 81.1169Z" />
              </svg>
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
            <div className='SignUpButtonCont'>
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
