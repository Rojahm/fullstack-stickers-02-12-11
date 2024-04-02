"use client";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Stickers from "@/app/(front)/ui/Stickers";

function TopStickers() {
  const [stickers, setStickers] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SRV_URL}/getNewStickers`)
      .then((res) => {
        setStickers(res.data);
      });
  }, []);
  return (
    <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col">
      <Link href={"/"} className="text-4xl">
        Top Stickers
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md" />
      <Stickers stickers={stickers} />
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

export default TopStickers;
