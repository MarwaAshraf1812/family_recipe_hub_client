import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchStates, setSearchStates] = useState({});

  const setSearch = (page, value) => {
    setSearchStates((e) => ({
      ...e,
      [page]: { ...e[page], search: value },
    }));
  };

  const setESearch = (page) => {
    setSearchStates((prev) => ({
      ...prev,
      [page]: { ...prev[page], eSearch: prev[page]?.search || '' },
    }));
  };

  return (
    <SearchContext.Provider
      value={{
        searchStates,
        setSearch,
        setESearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useSearch(page) {
  const { searchStates, setSearch, setESearch } = useContext(SearchContext);

  return {
    search: searchStates[page]?.search || '',
    eSearch: searchStates[page]?.eSearch || '',
    setSearch: (value) => setSearch(page, value),
    SearchFun: () => setESearch(page),
  };
}
