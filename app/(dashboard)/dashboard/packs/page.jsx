import Image from "next/image";
import Link from "next/link";
//Custom Components
import Pagination from "@/app/(front)/ui/Pagination";
// UI and Icons
import { FaRegEdit } from "react-icons/fa";
import { FaBan } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function DashBPacksPage() {
  const packs = [
    {
      title: "meme",
      cover: "/images/StickerPacks/covers/meme.png",
      image: "/images/StickerPacks/previews-512x512.png",
      link: "/",
      color: "bg-lime-400",
      show: true,
    },
    {
      title: "anime",
      cover: "/images/StickerPacks/covers/cover-anime.png",
      image: "/images/StickerPacks/BNHA – Tsuyu-a-256x256.png",
      link: "/",
      color: "bg-green-400",
      show: true,
    },
    {
      title: "cute",
      cover: "/images/StickerPacks/covers/cover-cute.png",
      image:
        "/images/StickerPacks/cute-eggs-pack1600175875-512x512-256x256.png",
      link: "/",
      color: "bg-yellow-400",
      show: true,
    },
    {
      title: "pokemon",
      cover: "/images/StickerPacks/covers/cover-pokemon-bg.png",
      image: "/images/StickerPacks/cover-pokemon-bg1-256x256.png",
      link: "/",
      color: "bg-purple-400",
      show: true,
    },
    {
      title: "cute cats",
      cover: "/images/StickerPacks/covers/cover-cute-cats.png",
      image: "/images/StickerPacks/previews-256x256.png",
      link: "/",
      color: "bg-sky-400",
      show: false,
    },
    {
      title: "among us",
      cover: "/images/StickerPacks/covers/cover-among-us.png",
      image: "/images/StickerPacks/изображение_2021-01-11_022359-256x256.png",
      link: "/",
      color: "bg-orange-400",
      show: true,
    },
  ];
  return (
    <div className="w-[95%] lg:w-[70%]">
      <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col">
        <div className="text-4xl">Sticker Packs</div>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <div className="mt-4 grid grid-cols-1 gap-10 md:gap-5">
          {packs.map((pack, i) => (
            <div className="flex justify-start items-center rounded-xl border-2 border-transparent hover:border-sky-400 group shadow-sm hover:shadow-md">
              <Link href={pack.link} key={i} className="w-[50%]">
                <div
                  className={`w-auto h-auto rounded-s-xl ${pack.color} group-hover:bg-black bg-cover`}
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
              <div className="flex justify-end items-center gap-5 w-[50%] pr-5">
                <Link
                  href={"/dashboard/packs/edit"}
                  className="shadow-md hover:shadow-lg hover:bg-sky-300 hover:text-white border border-sky-300 p-2 rounded-md"
                >
                  <FaRegEdit />
                </Link>

                <Link
                  href={"/dashboard/packs"}
                  className="shadow-md hover:shadow-lg hover:bg-sky-300 hover:text-white border border-sky-300 p-2 rounded-md"
                >
                  {pack.show ? <FaRegEyeSlash /> : <FaRegEye />}
                </Link>

                <Link
                  href={"/dashboard/packs/delete"}
                  className="shadow-md hover:shadow-lg hover:bg-sky-300 hover:text-white border border-sky-300 p-2 rounded-md"
                >
                  <FaRegTrashAlt />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default DashBPacksPage;
