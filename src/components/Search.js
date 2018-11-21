import React from 'react';

const Search = () => {
    const SearchText = 'search';
    const SearchStyle = {
        fontSize: 25
    };
    return <input type="text" style={SearchStyle} placeholder={SearchText} />;
};

export default Search;
