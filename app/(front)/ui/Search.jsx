import { IoIosSearch } from "react-icons/io";

function Search({ showSearch, setShowSearch }) {
  const closeSearch = () => {
    setShowSearch(false);
  };
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
