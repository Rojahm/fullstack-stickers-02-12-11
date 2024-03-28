"use client";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
//Custom Components
import Pagination from "@/app/ui/Pagination";

function StickersPacks() {
  const searchParams = useSearchParams();
  const [packs, setPacks] = useState([]);
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
      });
  }, [pagenumber, pagination]);
  return (
    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
        {packs.map((pack, i) => (
          <Link href={`/sticker-packs/${pack.title}`} key={i}>
            <div
              className={`w-auto h-auto rounded-xl  hover:bg-black bg-cover`}
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
        ))}
      </div>
      {/* pagination */}
      <Pagination qty={allPackQty} pg={pagination} pn={pagenumber} />
    </>
  );
}

export default StickersPacks;
