"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from "next/navigation";
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
    `${process.env.NEXT_PUBLIC_SRV_URL}/getStickersByTag/${query}`
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
  const [result, setResult] = useState([]);
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
        const tag = await searchTag(query);
        setTagResult(tag);
        setResult(pack.result.concat(sticker.result, tag));
      } else {
        setPackResult([]);
        setStickerResult([]);
        setTagResult([]);
        setResult([]);
      }
    };
    handleSearch(query);
  }, [query]);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    router.push("/search");
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
              Search Results:{query ? result.length : null}
            </h1>

            <div className="px-4 mb-4">
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
              {tagResult.length > 0 ? (
                <>
                  <p className="font-bold">Tags</p>
                  <hr className="border-[#814997] border-[1px]" />
                  <div className="flex flex-col my-2">
                    {tagResult.slice(0, 4).map((tag, i) => (
                      <Link
                        key={i}
                        href={"/"}
                        className="text-zinc-500 hover:font-bold transition-all duration-200 ease-in-out"
                      >
                        {tag.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
            {result.length > 0 ? <button>show more</button> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Search;
