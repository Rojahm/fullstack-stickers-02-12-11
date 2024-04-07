function Search({ showSearch }) {
  return (
    <>
      {showSearch ? (
        <div
          id="onPageSearch"
          className="bg-white/85 shadow-xl absolute top-12 right-28 w-[264px] p-5 rounded"
        >
          <h1>Search</h1>
        </div>
      ) : null}
    </>
  );
}

export default Search;
