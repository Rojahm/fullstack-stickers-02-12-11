"use client";
import Link from "next/link";
import PackPageHero from "../sticker-packs/PackPageHero";
import { Suspense } from "react";

import Stickers from "./Stickers";
function StickersPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero title={"ALL STICKERS"} />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <Link href={"/sticker-packs"} className={"text-[#814997]"}>
          / Stickers
        </Link>
      </div>
      {/* List of Sticker Packs */}
      <div className="w-[90%] lg:w-[80%] my-10">
        <Link href={"/"} className="text-4xl">
          Sticker Packs
        </Link>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <Suspense fallback={<div>Loading...</div>}>
          <Stickers />
        </Suspense>
      </div>
    </div>
  );
}

export default StickersPage;
