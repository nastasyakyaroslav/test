import React from 'react';
import './style.css';
import Loader from '../Loader';

interface Props {
    children: React.ReactNode
    styles?: object
    feching?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ styles, feching, children, onClick }) => {
    const loadingStyle = { color: 'transparent' };
    const buttonStyle = feching ? { ...styles, ...loadingStyle } : { ...styles }

    return (
        <button
            onClick={onClick}
            className='button'
            style={buttonStyle}>
            {children}
            {feching && <span className='loaderWrapper'><Loader /></span>}
        </button>
    )
};

export default Button;