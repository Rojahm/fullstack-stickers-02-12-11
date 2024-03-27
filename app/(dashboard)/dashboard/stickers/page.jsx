"use client";
import Image from "next/image";
import Link from "next/link";
//Custom Components
import Pagination from "@/app/ui/Pagination";
import { deleteSticker } from "@/app/lib/actions";
// UI and Icons
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";

function DashBStickerPage({ searchParams }) {
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allStickerQty, setAllStickerQty] = useState();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pagenumber = Number(searchParams.pn) || 1;
  const pagination = Number(searchParams.pg) || 5;

  useEffect(() => {
    axios
      .get(`${process.env.SRV}/allStickers?pn=${pagenumber}&pg=${pagination}`)
      .then((res) => {
        setStickers(res.data.paginatedStickers);
        setAllStickerQty(res.data.qty);
        // params.set("pn", pagenumber);
        // params.set("pg", pagination);
        // router.replace(`${pathname}?${params.toString()}`);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, [loading, pagenumber, pagination]);
  // Delete Sticker
  const handleDelete = async (id) => {
    await deleteSticker(id);
    setLoading(true);
  };
  return (
    <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col justify-center w-[95%] lg:w-[70%]">
      <Link href={"/"} className="text-4xl">
        All Stickers
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md w-full" />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mt-4 grid grid-cols-1 gap-5 w-full">
          {!loading &&
            stickers.map((sticker, i) => (
              <div
                key={i}
                className="flex justify-start items-center rounded-xl border-2 border-transparent hover:border-sky-400 group shadow-md hover:shadow-xl shadow-[#814997]/40 hover:shadow-[#814997]/50 group"
              >
                <div className="flex flex-col w-[50%] justify-center items-center gap-4 my-2 py-5 px-4 rounded-md shadow-xl shadow-[#814997]/40 group-hover:shadow-3xl group-hover:shadow-[#814997]/80">
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
                    href={`/dashboard/stickers/edit/${sticker._id}`}
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

                  <button
                    onClick={() => handleDelete(sticker._id)}
                    className="shadow-md hover:shadow-lg hover:bg-sky-300 hover:text-white border border-sky-300 p-2 rounded-md"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </Suspense>
      <Pagination qty={allStickerQty} />
    </div>
  );
}

export default DashBStickerPage;
