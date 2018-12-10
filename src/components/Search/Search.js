import React from 'react';

import  './style.css';

const Search = () => {
    const SearchText = 'search';
    
    return <input type="text" className ='form-control search-input' placeholder={SearchText} />;
};

export default Search;
