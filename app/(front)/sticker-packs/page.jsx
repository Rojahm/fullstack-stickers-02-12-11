"use client";
import Link from "next/link";
import { Suspense } from "react";
import PackPageHero from "./PackPageHero";
import StickersPacks from "./StickersPacks";
function StickerPacksPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <Link href={"/sticker-packs"} className={"text-[#814997]"}>
          / Sticker Packs
        </Link>
      </div>
      {/* List of Sticker Packs */}
      <div className="w-[90%] lg:w-[80%] my-10">
        <Link href={"/"} className="text-4xl">
          Sticker Packs
        </Link>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <Suspense fallback={<div>Loading...</div>}>
          <StickersPacks />
        </Suspense>
      </div>
    </div>
  );
}

export default StickerPacksPage;
