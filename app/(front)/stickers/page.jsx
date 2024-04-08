"use client";
import Link from "next/link";
import PackPageHero from "../sticker-packs/PackPageHero";
import { Suspense, lazy } from "react";
const Stickers = lazy(() => import("./Stickers"));
// import Stickers from "./Stickers";
import Title from "../ui/Title";
import Loading from "@/app/Loading";
function StickersPage() {
  const text = `A full list of our giant sticker collection. All stickers are popular and can be added to your extension as free stickers.
Sticker Mania’s custom stickers are totally unlike anything you’ve ever seen before. They’re made, shared and remixed by the Sticker Mania fam, so Sticker Mania’s the only place you’ll find them. Oh also? They’re 100% free and ALL up for grabs for you to play with. So what are you waiting for?`;
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero title={"ALL STICKERS"} text={text} />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <Link href={"/sticker-packs"} className={"text-[#814997]"}>
          / Stickers
        </Link>
      </div>
      {/* List of Sticker Packs */}
      <div className="w-[90%] lg:w-[80%] my-10">
        <Title title={"Stickers"} link={"/stickers"} />
        <Suspense fallback={<Loading />}>
          <Stickers />
        </Suspense>
      </div>
    </div>
  );
}

export default StickersPage;
