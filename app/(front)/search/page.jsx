"use client";
import { useSearchParams } from "next/navigation";
import PackPageHero from "../sticker-packs/PackPageHero";
import Title from "../ui/Title";
import Link from "next/link";
import Packs from "../ui/Packs";
import { useState, useEffect } from "react";
import { searchPack, searchSticker, searchTag } from "@/app/lib/data";
import Stickers from "../ui/Stickers";

function SearchPage() {
  const params = useSearchParams();
  const query = params.get("query");
  const [packs, setPacks] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const handleSearch = async (query) => {
      if (query) {
        const packResult = await searchPack(query);
        setPacks(packResult.result);
        const stickerResult = await searchSticker(query);
        setStickers(stickerResult.result);
        const tagResult = await searchTag(query);
        setTags(tagResult);
        // setResult([
        //   ...packResult.result,
        //   ...stickerResult.result,
        //   ...tagResult,
        // ]);
      } else {
        setPacks([]);
        setStickers([]);
        setTags([]);
        // setResult([]);
      }
    };
    handleSearch(query);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero title={`results for ${query}`} />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <div className={"text-[#814997] capitalize"}>/ results for {query}</div>
      </div>
      {/* List of Sticker Packs */}
      <div className="w-[90%] lg:w-[80%] my-10 flex flex-col gap-5">
        <Title title={"Sticker Packs"} link={"/sticker-packs"} />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          <Packs packs={packs} />
        </div>
        <Title title={"Stickers"} link={"/stickers"} />
        <Stickers stickers={stickers} />
        <Title title={"Tags"} link={"/sticker-packs"} />
      </div>
    </div>
  );
}

export default SearchPage;
