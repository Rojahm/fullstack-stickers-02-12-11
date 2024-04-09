"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";
import { searchPack, searchSticker } from "@/app/lib/data";
import { useDebouncedCallback } from "use-debounce";

function Search({ showSearch, setShowSearch }) {
  const [query, setQuery] = useState("");
  const [packResult, setPackResult] = useState([]);
  const [stickerResult, setStickerResult] = useState([]);
  const [result, setResult] = useState([]);
  const [hasMoreResult, setHasMoreResult] = useState();
  const closeSearch = () => {
    setShowSearch(false);
    setPackResult([]);
    setStickerResult([]);
    setResult([]);
    setHasMoreResult(false);
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const debouncedSearch = useDebouncedCallback(async (searchQuery) => {
    // const limit = 2;
    if (searchQuery) {
      const pack = await searchPack(searchQuery);
      setPackResult(pack.result);
      const sticker = await searchSticker(searchQuery);
      setStickerResult(sticker.result);
      setResult([...pack.result, ...sticker.result]);
      if (pack.result.length > 4 || sticker.result.length > 4) {
        setHasMoreResult(true);
      } else {
        setHasMoreResult(false);
      }
    } else {
      setPackResult([]);
      setStickerResult([]);
      setResult([]);
      setHasMoreResult(false);
    }
  }, 500);
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({ query });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <>
      {showSearch ? (
        <div
          id="onPageSearch"
          className="flex justify-center absolute top-10 left-0 w-full"
        >
          <div className="bg-white/85 shadow-xl rounded-md w-[50%] flex flex-col gap-2">
            <form className="flex" onSubmit={handleSubmit}>
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

            <h1 className="text-[purple] px-4">
              Search Results:
              {query ? (result.length > 0 ? result.length : "no match") : null}
            </h1>

            <div className="px-4">
              {packResult.length > 0 ? (
                <>
                  <p className="font-bold">Sticker Packs</p>
                  <hr className="border-[#814997] border-[1px]" />
                  <div className="flex flex-col my-2">
                    {packResult.slice(0, 4).map((pack, i) => (
                      <Link
                        key={i + "pack"}
                        href={"/"}
                        className="text-zinc-500 hover:font-bold transition-all duration-200 ease-in-out"
                      >
                        {pack.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : null}
              {stickerResult.length > 0 ? (
                <>
                  <p className="font-bold">Stickers</p>
                  <hr className="border-[#814997] border-[1px]" />
                  <div className="flex flex-col my-2">
                    {stickerResult.slice(0, 4).map((sticker, i) => (
                      <Link
                        key={i}
                        href={"/"}
                        className="text-zinc-500 hover:font-bold transition-all duration-200 ease-in-out"
                      >
                        {sticker.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
            {hasMoreResult ? (
              <button
                onClick={handleSubmit}
                className="text-[purple] text-sm flex justify-end items-center p-2"
              >
                show more
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Search;
