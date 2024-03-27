"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

function NewStickers() {
  const [stickers, setStickers] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.SRV}/getNewStickers`).then((res) => {
      setStickers(res.data);
    });
  }, []);
  return (
    <div className="px-6 md:px-12 lg:px-40 flex flex-col">
      <Link href={"/"} className="text-4xl">
        New Stickers
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md" />
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
      <div className="mt-6 flex justify-end ">
        <Link
          href={"/stickers"}
          className="border border-[#814997] w-[130px] rounded-full text-xl font-semibold py-3 text-center hover:bg-[#814997] hover:shadow-md hover:text-white transition-all ease-in-out duration-200"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}

export default NewStickers;
