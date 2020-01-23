import React from 'react';

import search from './search-box.module.scss';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className={search.wrapper}
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
