import React from 'react';

const Header = ({ onLogout }) => {
    return (
        <header className="bg-dark-blue text-white p-4 flex justify-between items-center">
            <div className="logo">MFS App</div>
            <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
        </header>
    );
};

export default Header;
