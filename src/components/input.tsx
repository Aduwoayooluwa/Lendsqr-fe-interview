import React, { useState } from 'react';
import './styles/input.scss'; 
import { SearchIconWhite } from '../assets';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchItem } from './search-tab';
import { Button } from 'antd';



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


const fetchDataBasedOnSearch = async (searchTerm: string): Promise<string[]> => {
    // Simulate fetching data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["result1", "result2", "result3"].filter(item => item.includes(searchTerm)));
        }, 1000);
    });
}

export const SearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        const results = await fetchDataBasedOnSearch(searchTerm);
        setSearchResults(results);
        setIsLoading(false);
    };

    return (
        <div className="search-container">
            <Input
                className="search-input"
                type="text"
                placeholder="Search for anything..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Button loading={isLoading} className="search-button" onClick={handleSearch}>
                {"Search"}
            </Button>

            <div className="searched-results">
                  <AnimatePresence>
      {searchResults.map((item, index) => (
          <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
          >
              <SearchItem item={item} />
          </motion.div>
      ))}
  </AnimatePresence>
            </div>
        </div>
    );
};
