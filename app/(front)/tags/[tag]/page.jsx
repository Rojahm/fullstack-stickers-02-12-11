"use client";
import PackPageHero from "../../sticker-packs/PackPageHero";
import Stickers from "../../ui/Stickers";
import { useEffect, useState } from "react";

// export const dynamicParams = true;

const getStickers = async (tag) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/getStickersByTag/${tag}`
  );
  // console.log(result.json());
  return result.json();
};

function TagPage({ params }) {
  // const stickers = await getStickers(params.tag);
  const [stickers, setStickers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getStickers(params.tag);
      setStickers(data);
    };
    getData();
  }, []);
  return (
    <>
      <PackPageHero title={`STICKERS OF ${params.tag.split("-").join(" ")}`} />
      <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col">
        <h1 className="text-2xl capitalize">
          Stickers on the subject of {params.tag.split("-").join(" ")}
        </h1>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <Stickers stickers={stickers} />
      </div>
    </>
  );
}

export default TagPage;
