"client component";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "@/app/ui/Pagination";
import { useSearchParams } from "next/navigation";

function Stickers() {
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
      <div className="mt-4 grid grid-cols-5 gap-5">
        {stickers.map((sticker, i) => (
          <div
            key={i}
            className="my-2 py-5 px-4 rounded-md shadow-xl shadow-[#814997]/40 hover:shadow-3xl hover:shadow-[#814997]/80"
          >
            <Link
              href={`/sticker-packs/${sticker.pack}/${sticker.title}`}
              className="flex flex-col justify-center items-center gap-4"
            >
              <Image
                src={sticker.imageLink}
                width={200}
                height={200}
                alt={sticker.title}
              />
              <p className="text-center line-clamp-3 leading-5 font-semibold">
                {sticker.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
      {/* pagination */}
      <Pagination qty={allStickerQty} pn={pagenumber} pg={pagination} />
    </>
  );
}

export default Stickers;
