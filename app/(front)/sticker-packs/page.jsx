"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PackPageHero from "./PackPageHero";
// import StickerPacksLayout from "./layout1";

function StickerPacksPage() {
  const pathName = usePathname();
  return (
    <>
      <PackPageHero />
      <div className="flex gap-2 leading-6 text-[22px] font-semibold">
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
    </>
  );
}

export default StickerPacksPage;
