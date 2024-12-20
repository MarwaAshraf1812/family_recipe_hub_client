import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState('');
  const [eSearch, setESearch] = useState('');

  const SearchFun = () => {
    setESearch(search);
  };

  return (
    <SearchContext.Provider value={{ search, setSearch, eSearch, SearchFun }}>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSearch() {
  return useContext(SearchContext);
}
