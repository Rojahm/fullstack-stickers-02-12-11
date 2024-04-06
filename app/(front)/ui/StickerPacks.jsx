"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Packs from "./Packs";

const getPacks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/getNewStickerPacks`
  );
  return res.json();
};

async function StickerPacks() {
  const [packs, setPacks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getPacks();
      setPacks(data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
        <Packs packs={packs} />
      </div>
      <div className="mt-6 flex justify-end ">
        <Link
          href={"/sticker-packs"}
          className="border border-[#814997] w-[130px] rounded-full text-xl font-semibold py-3 text-center hover:bg-[#814997] hover:shadow-md hover:text-white transition-all ease-in-out duration-200"
        >
          Show More
        </Link>
      </div>
    </>
  );
}

export default StickerPacks;
