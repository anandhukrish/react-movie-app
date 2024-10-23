import React, { ElementRef, useRef, useState } from "react";
import { Button } from "../ui/button";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<ElementRef<"input">>(null);

  const handleSearch = () => {
    if (searchInputRef.current?.value) {
      setSearchValue(searchInputRef.current?.value);
    }
  };

  return (
    <div className="search-box flex w-full justify-center">
      <input
        type="text"
        className="text-l mx-auto h-11 flex-1 rounded-bl-[8px] rounded-tl-[8px] p-3 outline-none focus-within:outline focus:outline"
        placeholder="Search Movies ,Tvs"
        ref={searchInputRef}
      />
      <Button
        className="h-ful h-11 rounded-none rounded-br-[8px] rounded-tr-[8px] bg-green-500 text-white"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
