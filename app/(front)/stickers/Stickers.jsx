"client component";
import { useEffect, useState } from "react";
import Pagination from "@/app/ui/Pagination";
import { useSearchParams } from "next/navigation";
import Stickers from "@/app/(front)/ui/Stickers";

const getStickers = async (pagenumber, pagination) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/allStickers?pn=${pagenumber}&pg=${pagination}`
  );
  return res.json();
};

function StickersPage() {
  const searchParams = useSearchParams();
  const [stickers, setStickers] = useState([]);
  const [allStickerQty, setAllStickerQty] = useState();
  const pagenumber = Number(searchParams.get("pn")) || 1;
  const pagination = Number(searchParams.get("pg")) || 30;
  useEffect(() => {
    const fetchData = async () => {
      const data = await getStickers(pagenumber, pagination);
      setStickers(data.paginatedStickers);
      setAllStickerQty(data.qty);
    };
    fetchData();
  }, [pagenumber, pagination]);
  return (
    <>
      <Stickers stickers={stickers} />
      {/* pagination */}
      <Pagination qty={allStickerQty} pn={pagenumber} pg={pagination} />
    </>
  );
}

export default StickersPage;
