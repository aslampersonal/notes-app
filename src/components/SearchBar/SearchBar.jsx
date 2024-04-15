import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search notes by title..."
                value={searchQuery}
                onChange={handleSearch}
            />
        </div>
    );
}

export default SearchBar;
