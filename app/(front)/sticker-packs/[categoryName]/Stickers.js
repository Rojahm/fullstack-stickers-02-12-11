import Image from "next/image";
import Link from "next/link";
import Stickers from "../../ui/Stickers";
async function getStickers(title) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/getPackStickers/${title}`
  );
  return res.json();
}

async function StickersPart({ title }) {
  const stickers = await getStickers(title);

  return (
    <div className="my-16 w-[90%] lg:w-[80%]">
      <Link href={"/"} className="text-2xl font-bold">
        Browse our sticker pack {title.split("-").join(" ")}
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md" />
      {stickers.length > 0 ? (
        <Stickers stickers={stickers} />
      ) : (
        <div>no stickers in this pack</div>
      )}
    </div>
  );
}

export default StickersPart;
