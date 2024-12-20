import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PropTypes from 'prop-types'
import { useSearch } from '../../context/SearchContext';
export default function BlogHeader() {
  const { search, setSearch, SearchFun } = useSearch();

  const handleSearch = () => {
    SearchFun();
  };
  return (
    <div className="flex flex-col mt-10 items-center justify-center px-4 space-y-6 py-12 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold  sm:text-4xl md:text-6xl">
        Blog & Article
      </h1>
      <p className=" text-sm text-gray-600 sm:text-base lg:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </p>
      <div className="relative w-full max-w-2xl mt-14" style={{ marginTop: "60px" }}>
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search article, news or recipe..."
          className="w-full pr-20 rounded-2xl h-[4.3rem]"
        />
        <Button onClick={handleSearch} className="absolute h-[3.2rem] md:w-36 w-24 rounded-2xl top-1/2 bg-black text-white right-2 transform -translate-y-1/2 px-6">
          Search
        </Button>
      </div>
    </div>
  );
}
BlogHeader.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};