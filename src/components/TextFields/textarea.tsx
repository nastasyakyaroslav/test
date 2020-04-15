import React from 'react';
import './style.css';

interface Props {
    label: string;
    placeholder: string;
}

const TextArea: React.FC<Props> = ({ label, placeholder }) => {
    return (
        <div className='textField'>
            <label
                className='label'
                htmlFor={label}>
                {label}
            </label>
            <div className='inputWrapper'>
                <textarea
                    placeholder={placeholder}
                    id={label}
                    className='textarea' />
            </div>
        </div>
    )
};

export default TextArea;