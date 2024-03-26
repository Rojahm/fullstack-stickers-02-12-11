"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

function StickerPage({ title, pack, targetsticker }) {
  const [sticker, setSticker] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setSticker(targetsticker);
    setLoading(false);
  }, [loading]);

  console.log(sticker);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90%] lg:w-[80%] my-6 flex gap-2 leading-6 text-[18px] font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/sticker-packs"}>/ Sticker Packs</Link>
        <Link href={`/sticker-packs/${pack}`} className="uppercase">
          / {pack.split("-").join(" ")}
        </Link>
        <div className="text-[#814997]">/ {title.split("-").join(" ")}</div>
      </div>
      <div className="mt-10 w-[90%] lg:w-[70%] flex flex-col gap-5 justify-center items-center md:flex-row rounded-3xl shadow-lg shadow-[#814997]/40 p-5">
        {!loading && (
          <>
            {/* image */}
            <div className="bg-white md:w-[40%] h-full p-4 -translate-y-20 md:translate-y-0 md:-translate-x-20 rounded-3xl shadow-lg">
              <Image
                src={sticker.imageLink}
                width={500}
                height={500}
                alt={sticker.title}
                // className="md:absolute md:bottom-48 lg:bottom-24 md:-left-32 lg:-left-28 lg:w-[400px]"
              />
            </div>
            {/* details */}
            <div className="flex flex-col gap-5 md:w-[60%]">
              <h1 className="text-4xl font-bold">
                {sticker.title.split("-").join(" ")}
              </h1>
              <p className="text-[#4e4a67] text-[0.8rem] leading-6">
                {sticker.description}
              </p>
              <div className="flex justify-center items-center">
                <button className="bg-[purple] hover:bg-[#814997] uppercase text-white text-md font-bold py-3 px-5 rounded-full">
                  Add stickers Pack
                </button>
              </div>
              <div className="bg-white shadow-lg shadow-[#814997]/40 rounded-3xl border py-8 px-3 lg:translate-x-20">
                <h2 className="font-bold text-lg">Related sticker packs:</h2>
                <hr className="border-2 border-[#814997]/20 rounded-full" />
                <div className="flex flex-wrap gap-5 my-5">
                  {sticker.tags.map((tag, i) => (
                    <button
                      key={i}
                      className="border-[purple] border rounded-3xl px-5 py-1 hover:shadow-xl hover:shadow-[#814997]/40 hover:bg-[mediumpurple] hover:text-white hover:border-[mediumpurple] transition-all ease-in-out duration-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default StickerPage;
