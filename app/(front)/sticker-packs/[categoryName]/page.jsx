"use client";
import Image from "next/image";
import Stickers from "./Stickers";
import HeaderStickerPack from "./HeaderStickerPack";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

function StickerPackSinglePage({ params }) {
  const title = params.categoryName;
  const [pack, setPack] = useState([-1]);
  useEffect(() => {
    axios.get(`${process.env.SRV}/allstickerPack/${title}`).then((res) => {
      setPack(res.data[0]);
      console.log(res.data[0].relatedPacks);
    });
  }, []);
  return (
    <>
      <HeaderStickerPack color={pack.color} textColor={"black"} />
      <div className="flex flex-col justify-center items-center">
        <div className="w-[90%] lg:w-[80%] my-6 flex gap-2 leading-6 text-[19px] font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/sticker-packs"}>/ Sticker Packs</Link>
          <div className="text-[#814997] capitalize">
            / {title.split("-").join(" ")}
          </div>
        </div>
        {pack[0] !== -1 && (
          <div className="mt-10 w-[90%] lg:w-[70%] flex flex-col gap-5 justify-center items-center md:flex-row rounded-3xl shadow-lg shadow-[#814997]/40 p-5">
            {/* image */}
            <div className="bg-white md:w-[40%] h-full p-4 -translate-y-20 md:translate-y-0 md:-translate-x-20 rounded-3xl shadow-lg">
              <Image
                src={pack.imageLink}
                width={500}
                height={500}
                alt={pack.title}
                // className="md:absolute md:bottom-48 lg:bottom-24 md:-left-32 lg:-left-28 lg:w-[400px]"
              />
            </div>
            {/* details */}
            <div className="flex flex-col gap-5 md:w-[60%]">
              <h1 className="text-4xl font-bold capitalize">
                {pack.title.split("-").join(" ")}
              </h1>
              <p className="text-[#4e4a67] text-[0.8rem] leading-6">
                {pack.description}
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
                  {pack.relatedPacks
                    ? pack.relatedPacks.map((relatedPack, i) => (
                        <Link
                          href={`/sticker-packs/${relatedPack}`}
                          key={i}
                          className="border-[purple] border rounded-3xl px-5 py-1 hover:shadow-xl hover:shadow-[#814997]/40 hover:bg-[mediumpurple] hover:text-white hover:border-[mediumpurple] transition-all ease-in-out duration-200"
                        >
                          {relatedPack}
                        </Link>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        )}
        <Stickers title={title} />
      </div>
    </>
  );
}

export default StickerPackSinglePage;
