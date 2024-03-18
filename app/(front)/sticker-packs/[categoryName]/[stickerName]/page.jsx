import Stickers from "../Stickers";
import HeaderSticker from "./HeaderSticker";
import StickerPage from "./Sticker";

function StickerSinglePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderSticker color={"#EC5298"} textColor={"black"} />
      <StickerPage />
      <Stickers />
    </div>
  );
}

export default StickerSinglePage;
