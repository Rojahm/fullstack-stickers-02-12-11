"use client";
import PackPageHero from "../sticker-packs/PackPageHero";
import Title from "../ui/Title";
import Link from "next/link";
import StickerResult from "./StickerResult";
import { Suspense } from "react";
import Loading from "@/app/Loading";
import { useState, useEffect } from "react";
import PackResult from "./PackResult";

function SearchPage() {
  const [title, setTitle] = useState("");

  // const [tags, setTags] = useState([]);
  // useEffect(() => {
  //   const handleSearch = async (query) => {
  //     if (query) {
  //       const packResult = await searchPack(query);
  //       setPacks(packResult.result);
  //       // const stickerResult = await searchSticker(query);
  //       // setStickers(stickerResult.result);
  //       const tagResult = await searchTag(query);
  //       setTags(tagResult);
  //       // setResult([
  //       //   ...packResult.result,
  //       //   ...stickerResult.result,
  //       //   ...tagResult,
  //       // ]);
  //     } else {
  //       setPacks([]);
  //       // setStickers([]);
  //       setTags([]);
  //       // setResult([]);
  //     }
  //   };
  //   handleSearch(query);
  // }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero title={`results for ${title}`} />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <div className={"text-[#814997] capitalize"}>/ results for {title}</div>
      </div>
      {/* List of Sticker Packs */}
      <div className="w-[90%] lg:w-[80%] my-10 flex flex-col gap-5">
        <Title title={"Sticker Packs"} link={"/sticker-packs"} />
        <Suspense fallback={<Loading />}>
          <PackResult setTitle={setTitle} />
        </Suspense>
        <Title title={"Stickers"} link={"/stickers"} />
        <Suspense fallback={<Loading />}>
          <StickerResult />
        </Suspense>
        <Title title={"Tags"} link={"/sticker-packs"} />
      </div>
    </div>
  );
}

export default SearchPage;
