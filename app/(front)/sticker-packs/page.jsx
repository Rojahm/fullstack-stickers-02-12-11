"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PackPageHero from "./PackPageHero";
import Pagination from "../ui/Pagination";
import StickersPacks from "./StickersPacks";
// import StickerPacksLayout from "./layout1";

function StickerPacksPage() {
  const pathName = usePathname();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <Link
          href={"/sticker-packs"}
          className={clsx("", {
            "text-[#814997]": pathName === "/sticker-packs",
          })}
        >
          / Sticker Packs
        </Link>
      </div>
      {/* List of Sticker Packs */}
      <div className="w-[90%] lg:w-[80%] my-10">
        <Link href={"/"} className="text-4xl">
          Sticker Packs
        </Link>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <StickersPacks />
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  );
}

export default StickerPacksPage;
