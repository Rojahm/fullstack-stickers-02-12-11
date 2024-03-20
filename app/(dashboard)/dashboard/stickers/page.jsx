import Image from "next/image";
import Link from "next/link";
//Custom Components
import Pagination from "@/app/(front)/ui/Pagination";
// UI and Icons
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function DashBStickerPage() {
  const stickers = [
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/among-us-red-jumps-512x512.png",
      link: "/",
      show: true,
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/egg-bacon-love-512x512.png",
      link: "/",
      show: true,
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/dumbo-smile-512x512.png",
      link: "/",
      show: true,
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/playstation-symbols-512x512.png",
      link: "/",
      show: true,
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/heart-peace-512x512.png",
      link: "/",
      show: true,
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/heart-peace-512x512.png",
      link: "/",
      show: true,
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/heart-peace-512x512.png",
      link: "/",
      show: true,
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/heart-peace-512x512.png",
      link: "/",
      show: true,
    },
  ];
  return (
    <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col justify-center w-[95%] lg:w-[70%]">
      <Link href={"/"} className="text-4xl">
        All Stickers
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md w-full" />
      <div className="mt-4 grid grid-cols-1 gap-5 w-full">
        {stickers.map((sticker, i) => (
          <div
            key={i}
            className="flex justify-start items-center rounded-xl border-2 border-transparent hover:border-sky-400 group shadow-md hover:shadow-xl shadow-[#814997]/40 hover:shadow-[#814997]/50 group"
          >
            <div className="flex flex-col justify-center items-center gap-4 my-2 py-5 px-4 rounded-md shadow-xl shadow-[#814997]/40 group-hover:shadow-3xl group-hover:shadow-[#814997]/80">
              <Image
                src={sticker.imageLink}
                width={200}
                height={200}
                alt={sticker.title}
              />
              <p className="text-center line-clamp-3 leading-5 font-semibold">
                {sticker.title}
              </p>
            </div>
            <div className="flex justify-end items-center gap-5 w-[50%] pr-5">
              <Link
                href={"/dashboard/stickers/edit"}
                className="shadow-md hover:shadow-lg hover:bg-sky-300 hover:text-white border border-sky-300 p-2 rounded-md"
              >
                <FaRegEdit />
              </Link>

              <Link
                href={"/dashboard/stickers"}
                className="shadow-md hover:shadow-lg hover:bg-sky-300 hover:text-white border border-sky-300 p-2 rounded-md"
              >
                {sticker.show ? <FaRegEyeSlash /> : <FaRegEye />}
              </Link>

              <Link
                href={"/dashboard/stickers/delete"}
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
  );
}

export default DashBStickerPage;
