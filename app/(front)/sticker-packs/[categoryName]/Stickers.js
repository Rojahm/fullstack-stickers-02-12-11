import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
function Stickers({ title }) {
  const [stickers, setStickers] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SRV_URL}/getPackStickers/${title}`)
      .then((res) => {
        setStickers(res.data);
      });
  }, []);

  return (
    <div className="my-16 w-[90%] lg:w-[80%]">
      <Link href={"/"} className="text-2xl font-bold">
        Browse our sticker pack {title}
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md" />
      <div className="mt-4 grid grid-cols-5 gap-5">
        {stickers.map((sticker, i) => (
          <div
            key={i}
            className="my-2 py-5 px-4 rounded-md shadow-xl shadow-[#814997]/40 hover:shadow-3xl hover:shadow-[#814997]/80"
          >
            <Link
              href={`/sticker-packs/${title}/${sticker.title}`}
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
    </div>
  );
}

export default Stickers;
