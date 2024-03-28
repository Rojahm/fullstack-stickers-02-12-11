//Custom Components
"use client";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/app/ui/Pagination";
import { deleteSticker } from "@/app/lib/actions";
// UI and Icons
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

function Stickers() {
  const searchParams = useSearchParams();
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allStickerQty, setAllStickerQty] = useState();
  const pagenumber = Number(searchParams.get("pn")) || 1;
  const pagination = Number(searchParams.get("pg")) || 5;

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_SRV_URL}/allStickers?pn=${pagenumber}&pg=${pagination}`
      )
      .then((res) => {
        setStickers(res.data.paginatedStickers);
        setAllStickerQty(res.data.qty);
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
    <>
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
      {/* pagination */}
      <Pagination qty={allStickerQty} pn={pagenumber} pg={pagination} />
    </>
  );
}

export default Stickers;
