import NotFound from "@/app/not-found";
import Stickers from "../Stickers";
import HeaderSticker from "./HeaderSticker";
import StickerPage from "./Sticker";

export const dynamicParams = true;

export async function generateStaticParams() {
  const stickers = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/allStickers`
  ).then((res) => res.json());
  const result = stickers.map((stickers) => ({
    categoryName: stickers.pack,
    stickerName: stickers.title,
  }));
  return result;
}

const getSticker = async (stickerName) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/getStickerByName/${stickerName}`
  );
  const data = await res.json();
  return data[0];
};
async function StickerSinglePage({ params }) {
  const packname = params.categoryName;
  const stickername = params.stickerName;
  const sticker = await getSticker(stickername);
  return (
    <>
      {sticker ? (
        <>
          <HeaderSticker color={sticker.color} textColor={"black"} />
          <div className="flex flex-col justify-center items-center">
            <StickerPage pack={packname} sticker={sticker} />
            <Stickers title={packname} />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default StickerSinglePage;
