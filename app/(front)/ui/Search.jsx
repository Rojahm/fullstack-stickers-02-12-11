"use client";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
// import { useDebouncedCallback } from "use-debounce";

const searchPack = async (query) => {
  const packData = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/searchPack/${query}`
  );
  return packData.json();
};
const searchSticker = async (query) => {
  const stickerData = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/searchSticker/${query}`
  );
  return stickerData.json();
};
const searchTag = async (query) => {
  const tagData = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/searchSticker/${query}`
  );
  return tagData.json();
};

function Search({ showSearch, setShowSearch }) {
  const closeSearch = () => {
    setShowSearch(false);
  };
  const [query, setQuery] = useState("");
  const [packResult, setPackResult] = useState([]);
  const [stickerResult, setStickerResult] = useState([]);
  const [tagResult, setTagResult] = useState([]);
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    const handleSearch = async (query) => {
      if (query) {
        const pack = await searchPack(query);
        setPackResult(pack.result);
        const sticker = await searchSticker(query);
        setStickerResult(sticker.result);
      }
    };
    handleSearch(query);
  }, [query]);

  return (
    <>
      {showSearch ? (
        <div
          id="onPageSearch"
          className="flex justify-center absolute top-10 left-0 w-full"
        >
          <div className="bg-white/85 shadow-xl rounded-md w-[50%] flex flex-col gap-2">
            <form className="flex">
              <button className="relative px-2 text-[purple] bg-white rounded-tl-md">
                <IoIosSearch />
              </button>
              <input
                autoComplete="off"
                autoFocus
                onChange={handleQuery}
                name="query"
                type="text"
                placeholder="Search ChopSticks"
                className="px-1 w-full rounded-sm text-sm outline-none"
              ></input>
              <button
                onClick={closeSearch}
                className="relative px-2 text-[purple] bg-white rounded-tr-md"
              >
                x
              </button>
            </form>

            <h1 className="text-[purple] px-4">Search Results</h1>

            <div className="px-4 mb-4">Results</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Search;
