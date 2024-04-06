// "use client";
import Link from "next/link";
// import axios from "axios";
// import { useEffect, useState } from "react";
import Stickers from "@/app/(front)/ui/Stickers";

export const revalidate = 30;

const getStickers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SRV_URL}/getNewStickers`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
};

async function NewStickers() {
  const stickers = await getStickers();
  return (
    <>
      <Stickers stickers={stickers} />
      <div className="mt-6 flex justify-end ">
        <Link
          href={"/stickers"}
          className="border border-[#814997] w-[130px] rounded-full text-xl font-semibold py-3 text-center hover:bg-[#814997] hover:shadow-md hover:text-white transition-all ease-in-out duration-200"
        >
          Show More
        </Link>
      </div>
    </>
  );
}

export default NewStickers;
