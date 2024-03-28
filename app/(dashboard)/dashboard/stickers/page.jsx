"use client";
import Link from "next/link";
import { Suspense } from "react";
import Stickers from "./Stickers";

function DashBStickerPage() {
  return (
    <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col justify-center w-[95%] lg:w-[70%]">
      <Link href={"/"} className="text-4xl">
        All Stickers
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md w-full" />
      <Suspense fallback={<div>Loading...</div>}>
        <Stickers />
      </Suspense>
    </div>
  );
}

export default DashBStickerPage;
