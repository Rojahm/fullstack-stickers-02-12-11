"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
//Custom Components
import Pagination from "@/app/ui/Pagination";
import Packs from "../ui/Packs";

const getStickerPacks = async (pagenumber, pagination) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/stickerPacks?pn=${pagenumber}&pg=${pagination}`
  );
  return res.json();
};

function StickersPacks() {
  const searchParams = useSearchParams();
  const [packs, setPacks] = useState([]);
  const [allPackQty, setAllPackQty] = useState();
  const pagenumber = Number(searchParams.get("pn")) || 1;
  const pagination = Number(searchParams.get("pg")) || 6;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStickerPacks(pagenumber, pagination);
      setPacks(data.paginatedPacks);
      setAllPackQty(data.qty);
    };

    fetchData();
  }, [pagenumber, pagination]);
  return (
    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
        <Packs packs={packs} />
      </div>
      {/* pagination */}
      <Pagination qty={allPackQty} pg={pagination} pn={pagenumber} />
    </>
  );
}

export default StickersPacks;
