import React, { useState } from 'react';
import './style.css';

interface Props {
    label: string;
    type?: 'text' | 'tel' | 'email' | 'subject';
    placeholder: string;
    onChange: (value: string, field: Label, error?: string) => void;
    reg: RegExp;
    id: Label;
    required?: boolean;
}

const Input: React.FC<Props> = ({ label, type = 'text', placeholder, onChange, reg, id }) => {

    const [error, setError] = useState('');
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('')
        setValue(e.target.value)
        onChange(e.target.value, id, error);
        if (!e.target.value.trim() || (reg && !reg.test(e.target.value))) {
            setError("Error message")
        }
    }

    return (
        <div className='textField'>
            <div className='inputHeadeSection'>
                <label
                    className='label'
                    htmlFor={id}>
                    {label}
                </label>
                <span className='errorMessage'>{error}</span>
            </div>
            <div className='inputWrapper'>
                <input
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    id={id}
                    className='input'
                    type={type} />
            </div>
        </div>
    )
};

export default Input;