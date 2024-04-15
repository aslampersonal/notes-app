import React from 'react';
import './FloatingButton.css';

function FloatingButton({ onClick }) {
    return (
        <div className="floating-button" onClick={onClick}>
            +
        </div>
    );
}

export default FloatingButton;
