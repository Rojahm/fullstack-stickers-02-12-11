"use client";
import { Suspense } from "react";
import StickerPacks from "./StickerPacks";

function DashBPacksPage() {
  return (
    <div className="w-[95%] lg:w-[70%]">
      <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col">
        <div className="text-4xl">Sticker Packs</div>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <Suspense fallback={<div>Loading...</div>}>
          <StickerPacks />
        </Suspense>
      </div>
    </div>
  );
}

export default DashBPacksPage;
