"client component";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "@/app/ui/Pagination";
import { useSearchParams } from "next/navigation";
import Stickers from "@/app/(front)/ui/Stickers";

function StickersPage() {
  const searchParams = useSearchParams();
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allStickerQty, setAllStickerQty] = useState();
  const pagenumber = Number(searchParams.get("pn")) || 1;
  const pagination = Number(searchParams.get("pg")) || 30;
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_SRV_URL}/allStickers?pn=${pagenumber}&pg=${pagination}`
      )
      .then((res) => {
        setStickers(res.data.paginatedStickers);
        setAllStickerQty(res.data.qty);
        setLoading(false);
      });
  }, [loading, pagenumber, pagination]);
  return (
    <>
      <Stickers stickers={stickers} />
      {/* pagination */}
      <Pagination qty={allStickerQty} pn={pagenumber} pg={pagination} />
    </>
  );
}

export default StickersPage;
