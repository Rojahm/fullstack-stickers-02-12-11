"use client";
import clsx from "clsx";
import Link from "next/link";
import PackPageHero from "./PackPageHero";
import StickersPacks from "./StickersPacks";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "@/app/ui/Pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";
export const dynamicParms = true;
function StickerPacksPage({ searchParams }) {
  const [packs, setPacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allPackQty, setAllPackQty] = useState();
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const params = new URLSearchParams(searchParams);
  const pagenumber = Number(searchParams.pn) || 1;
  const pagination = Number(searchParams.pg) || 6;
  useEffect(() => {
    axios
      .get(`${process.env.SRV}/stickerPacks?pn=${pagenumber}&pg=${pagination}`)
      .then((res) => {
        setPacks(res.data.paginatedPacks);
        setAllPackQty(res.data.qty);
        // params.set("pn", pagenumber);
        // params.set("pg", pagination);
        // router.replace(`${pathname}?${params.toString()}`);
        setLoading(false);
      });
  }, [loading, pagenumber, pagination]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <Link href={"/sticker-packs"} className={"text-[#814997]"}>
          / Sticker Packs
        </Link>
      </div>
      {/* List of Sticker Packs */}
      <div className="w-[90%] lg:w-[80%] my-10">
        <Link href={"/"} className="text-4xl">
          Sticker Packs
        </Link>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <Suspense fallback={<div>Loading...</div>}>
          <StickersPacks packs={packs} />
        </Suspense>
      </div>
      {/* pagination */}
      <Pagination qty={allPackQty} pg={pagination} pn={pagenumber} />
    </div>
  );
}

export default StickerPacksPage;
