// src/components/darkmode.js
import './componentCSS/darkMode.css';

export const DarkMode = ({ handleChange, isChecked}) => {
    return (
        <div className='toggle-container'>
            <label htmlFor='check' className='switch'>
                <input 
                    type='checkbox'
                    id='check'
                    className='toggle'
                    onChange={handleChange}
                    checked={isChecked}
                />
                <span className='slider'/>
            </label>
        </div>
    );
};