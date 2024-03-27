"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

//Custom Components
import Pagination from "@/app/ui/Pagination";
import { deletePack } from "@/app/lib/actions";

// UI and Icons
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Suspense } from "react";

function DashBPacksPage({ searchParams }) {
  // console.log(searchParams);
  const [packs, setPacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allPackQty, setAllPackQty] = useState();
  const router = useRouter();
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const params = new URLSearchParams(searchParams);
  const pagenumber = Number(searchParams.pn) || 1;
  const pagination = Number(searchParams.pg) || 6;
  useEffect(() => {
    axios
      .get(`${process.env.SRV}/stickerPacks?pn=${pagenumber}&pg=${pagination}`)
      .then((res) => {
        setPacks(res.data.paginatedPacks);
        setAllPackQty(Number(res.data.qty));
        // params.set("pn", pagenumber);
        // params.set("pg", pagination);
        // router.replace(`${pathname}?pn=${pn}&pg=${pg}`);
        setLoading(false);
      });
  }, [loading, pagenumber, pagination]);
  const handleDelete = async (id) => {
    await deletePack(id);
    // window.location.reload();
    setLoading(true);
  };
  return (
    <div className="w-[95%] lg:w-[70%]">
      <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col">
        <div className="text-4xl">Sticker Packs</div>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <Suspense fallback={<div>Loading...</div>}>
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
                    // href={`https://srv-sticker-shop.liara.run/api/deleteStickerPack/${pack.id}`}
                    className="shadow-md hover:shadow-lg hover:bg-sky-300 hover:text-white border border-sky-300 p-2 rounded-md"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Pagination qty={allPackQty} pn={pagenumber} pg={pagination} />
        </Suspense>
      </div>
    </div>
  );
}

export default DashBPacksPage;
