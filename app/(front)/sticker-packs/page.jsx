"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import PackPageHero from "./PackPageHero";
import StickersPacks from "./StickersPacks";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "@/app/ui/Pagination";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

function StickerPacksPage() {
  const [packs, setPacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allPackQty, setAllPackQty] = useState();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pagenumber = params.get("pn") || 1;
  const pagination = params.get("pg") || 6;
  useEffect(() => {
    axios
      .get(`${process.env.SRV}/stickerPacks?pn=${pagenumber}&pg=${pagination}`)
      .then((res) => {
        setPacks(res.data.paginatedPacks);
        setAllPackQty(res.data.qty);
        params.set("pn", pagenumber);
        params.set("pg", pagination);
        router.replace(`${pathname}?${params.toString()}`);
        setLoading(false);
      });
  }, [loading, pagenumber, pagination]);
  console.log(packs);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <PackPageHero />
      {/* Breadcrumbs here */}
      <div className="flex gap-2 leading-6 text-[22px] font-semibold w-[90%] lg:w-[80%]">
        <Link href={"/"}>Home</Link>
        <Link
          href={"/sticker-packs"}
          className={clsx("", {
            "text-[#814997]": pathname === "/sticker-packs",
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
        <StickersPacks packs={packs} />
      </div>
      {/* pagination */}
      <Pagination qty={allPackQty} pg={pagination} pn={pagenumber} />
    </div>
  );
}

export default StickerPacksPage;
