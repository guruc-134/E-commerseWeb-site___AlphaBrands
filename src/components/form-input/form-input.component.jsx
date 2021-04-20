import React from 'react';

import './form-input.style.scss';
const FormInput = ( {handleChange, label , ...otherProps} ) =>    
(
    <div className='group'>
        {/* // eslint-disable-next-line no-undef */}
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ? (
            <label
                className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput;