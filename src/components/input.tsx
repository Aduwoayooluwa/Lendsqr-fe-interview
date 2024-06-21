import React, { useState } from 'react';
import './styles/input.scss'; 
import { SearchIconWhite } from '../assets';



export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
    ...rest
}) => {
    return (
        <input className="input-field" {...rest} />
    );
};


export const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="search-container">
            <Input
                className="search-input"
                type="text"
                placeholder="Search for anything"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className="search-button" onClick={handleSearch}>
                <img src={SearchIconWhite} alt="Search" />
            </button>
        </div>
    );
};
