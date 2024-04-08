"use client";
import Link from "next/link";
import { Suspense, lazy } from "react";
import PackPageHero from "./PackPageHero";
// import StickersPacks from "./StickersPacks";
const StickersPacks = lazy(() => import("./StickersPacks"));
import Loading from "@/app/Loading";
import Title from "../ui/Title";

function StickerPacksPage() {
  const text = `Sticker Mania’s custom stickers are totally unlike anything you’ve
            ever seen before. They’re made, shared and remixed by the Sticker
            Mania fam, so Sticker Mania’s the only place you’ll find them. Oh
            also? They’re 100% free and ALL up for grabs for you to play with.
            So what are you waiting for?`;
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero title={"ALL STICKER PACKS"} text={text} />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <Link href={"/sticker-packs"} className={"text-[#814997]"}>
          / Sticker Packs
        </Link>
      </div>
      {/* List of Sticker Packs */}
      <div className="w-[90%] lg:w-[80%] my-10">
        <Title title={"Sticker Packs"} link={"/sticker-packs"} />
        <Suspense fallback={<Loading />}>
          <StickersPacks />
        </Suspense>
      </div>
    </div>
  );
}

export default StickerPacksPage;
