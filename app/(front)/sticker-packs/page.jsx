"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PackPageHero from "./PackPageHero";
import Pagination from "../ui/Pagination";
// import StickerPacksLayout from "./layout1";

function StickerPacksPage() {
  const pathName = usePathname();
  const packs = [
    {
      title: "meme",
      cover: "/images/StickerPacks/covers/meme.png",
      image: "/images/StickerPacks/previews-512x512.png",
      link: "/",
      color: "bg-lime-400",
    },
    {
      title: "anime",
      cover: "/images/StickerPacks/covers/cover-anime.png",
      image: "/images/StickerPacks/BNHA – Tsuyu-a-256x256.png",
      link: "/",
      color: "bg-green-400",
    },
    {
      title: "cute",
      cover: "/images/StickerPacks/covers/cover-cute.png",
      image:
        "/images/StickerPacks/cute-eggs-pack1600175875-512x512-256x256.png",
      link: "/",
      color: "bg-yellow-400",
    },
    {
      title: "pokemon",
      cover: "/images/StickerPacks/covers/cover-pokemon-bg.png",
      image: "/images/StickerPacks/cover-pokemon-bg1-256x256.png",
      link: "/",
      color: "bg-purple-400",
    },
    {
      title: "cute cats",
      cover: "/images/StickerPacks/covers/cover-cute-cats.png",
      image: "/images/StickerPacks/previews-256x256.png",
      link: "/",
      color: "bg-sky-400",
    },
    {
      title: "among us",
      cover: "/images/StickerPacks/covers/cover-among-us.png",
      image: "/images/StickerPacks/изображение_2021-01-11_022359-256x256.png",
      link: "/",
      color: "bg-orange-400",
    },
  ];
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
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          {packs.map((pack, i) => (
            <Link href={pack.link} key={i}>
              <div
                className={`w-auto h-auto rounded-xl ${pack.color} hover:bg-black bg-cover`}
                style={{ backgroundImage: `url(${pack.cover})` }}
              >
                <Image
                  src={pack.image}
                  width={200}
                  height={200}
                  alt={pack.title}
                  className="p-3 m-auto"
                />
                <p className="uppercase text-center font-bold text-xl text-white drop-shadow-md">
                  {pack.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* pagination */}
      <Pagination />
    </div>
  );
}

export default StickerPacksPage;
