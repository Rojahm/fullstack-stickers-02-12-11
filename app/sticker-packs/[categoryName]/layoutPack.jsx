import HeaderStickerPack from "./HeaderStickerPack";
import Link from "next/link";

function StickerPackSingleLayout({ children }) {
  return (
    <>
      <HeaderStickerPack />
      <div className="mx-10 my-6">
        <div className="flex gap-2 leading-6 text-[22px] font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/sticker-packs"}>/ Sticker Packs</Link>
          <div className="text-[#814997]">/ Sanario</div>
        </div>
        {children}
      </div>
    </>
  );
}

export default StickerPackSingleLayout;
