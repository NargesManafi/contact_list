import React from "react";

const SearchBox = ({ handleSearch }) => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search contacts..." onChange={handleSearch} />
      <button>Search</button>
    </div>
  );
}

export default SearchBox;