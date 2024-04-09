"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
//Custom Components
import Pagination from "@/app/ui/Pagination";
import { deletePack } from "@/app/lib/actions";
// UI and Icons
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StickerPacks() {
  const searchParams = useSearchParams();
  const [packs, setPacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allPackQty, setAllPackQty] = useState();
  const pagenumber = Number(searchParams.get("pn")) || 1;
  const pagination = Number(searchParams.get("pg")) || 6;

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_SRV_URL}/stickerPacks?pn=${pagenumber}&pg=${pagination}`
      )
      .then((res) => {
        setPacks(res.data.paginatedPacks);
        setAllPackQty(res.data.qty);
        setLoading(false);
      });
  }, [loading, pagenumber, pagination]);

  const handleDelete = async (id) => {
    const deleteP = async () =>
      await deletePack(id).then(() => {
        setLoading(true);
      });
    toast.promise(deleteP, {
      pending: "Deleting",
      success: "Sticker Pack Deleted",
      error: "error",
    });
    // window.location.reload();
  };
  return (
    <>
      <ToastContainer />
      <div className="mt-4 grid grid-cols-1 gap-10 md:gap-5">
        {packs.map((pack, i) => (
          <div
            key={i}
            className="flex justify-start items-center rounded-xl border-2 border-transparent hover:border-sky-400 group shadow-sm hover:shadow-md"
          >
            <Link href={pack.link} key={i} className="w-[50%]">
              <div
                className={`w-auto h-auto rounded-s-xl group-hover:bg-black bg-cover`}
                style={{
                  backgroundImage: `url(${pack.cover})`,
                  backgroundColor: `${pack.color}`,
                }}
              >
                <Image
                  src={pack.imageLink}
                  width={200}
                  height={200}
                  alt={pack.title}
                  className="p-3 m-auto"
                />
                <p className="uppercase text-center font-bold text-xl text-white drop-shadow-md">
                  {pack.title.split("-").join(" ")}
                </p>
              </div>
            </Link>
            <div className="flex justify-end items-center gap-5 w-[50%] pr-5">
              <Link
                href={`/dashboard/packs/edit/${pack._id}`}
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

              <button
                onClick={() => handleDelete(pack._id)}
                className="shadow-md hover:shadow-lg hover:bg-sky-300 hover:text-white border border-sky-300 p-2 rounded-md"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <Pagination qty={allPackQty} pn={pagenumber} pg={pagination} />
    </>
  );
}

export default StickerPacks;
