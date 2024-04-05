"use client";
import Link from "next/link";
import PackPageHero from "../sticker-packs/PackPageHero";
import { Suspense, lazy } from "react";
const Stickers = lazy(() => import("./Stickers"));
// import Stickers from "./Stickers";
import Title from "../ui/Title";
import Loading from "@/app/Loading";
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
        <Title title={"Stickers"} link={"/stickers"} />
        <Suspense fallback={<Loading />}>
          <Stickers />
        </Suspense>
      </div>
    </div>
  );
}

export default StickersPage;
