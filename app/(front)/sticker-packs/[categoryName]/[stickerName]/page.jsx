import Stickers from "../Stickers";
import HeaderSticker from "./HeaderSticker";
import StickerPage from "./Sticker";

function StickerSinglePage() {
  return (
    <>
      <HeaderSticker color={"#EC5298"} textColor={"black"} />
      <div className="flex flex-col justify-center items-center">
        <StickerPage />
        <Stickers />
      </div>
    </>
  );
}

export default StickerSinglePage;
