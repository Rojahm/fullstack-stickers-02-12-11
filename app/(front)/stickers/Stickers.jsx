"client component";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

function Stickers() {
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`${process.env.SRV}/allStickers`).then((res) => {
      setStickers(res.data);
      setLoading(false);
    });
  }, [loading]);
  console.log(stickers);
  return (
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
  );
}

export default Stickers;
