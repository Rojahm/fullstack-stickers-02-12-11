// "use client";
import Link from "next/link";
import Image from "next/image";
// import axios from "axios";
// import { useEffect, useState } from "react";

export const revalidate = 30;

const getPacks = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/getNewStickerPacks`
  );
  return res.json();
};

async function StickerPacks() {
  const packs = await getPacks();
  // const [packs, setPacks] = useState([]);
  // useEffect(() => {
  //   axios.get().then((res) => {
  //     setPacks(res.data);
  //   });
  // }, []);
  return (
    <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col">
      <Link href={"/"} className="text-4xl">
        Sticker Packs
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md" />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
        {packs.map((pack, i) => (
          <Link href={`/sticker-packs/${pack.title}`} key={i}>
            <div
              className={`w-auto h-auto rounded-xl hover:bg-black bg-cover`}
              style={{
                backgroundImage: `url(${pack.cover})`,
                backgroundColor: `${pack.color}`,
              }}
            >
              <Image
                src={pack.imageLink}
                width={200}
                height={200}
                alt={pack.title}
                className="p-3 m-auto"
              />
              <p className="uppercase text-center font-bold text-xl text-white drop-shadow-md">
                {pack.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-end ">
        <Link
          href={"/sticker-packs"}
          className="border border-[#814997] w-[130px] rounded-full text-xl font-semibold py-3 text-center hover:bg-[#814997] hover:shadow-md hover:text-white transition-all ease-in-out duration-200"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}

export default StickerPacks;
