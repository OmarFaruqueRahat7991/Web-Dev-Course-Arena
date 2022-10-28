import React from 'react';
import './Toggle.css';

const Toggle = () => {
    return (
        <div>
            <div>
            <label className='switch'>
                <input type="checkbox" />
                <span className="slider">
                </span>
            </label>
        </div>
        </div>
    );
};

export default Toggle;