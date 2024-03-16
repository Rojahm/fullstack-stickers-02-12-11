import Header from "@/app/ui/Header";
import Image from "next/image";

function HeaderStickerPack() {
  return (
    <div className="bg-blue-300 h-[16vh] lg:h-[20vh] relative">
      <Image
        src={"/page_pack.png"}
        alt="page pack bg"
        fill={true}
        style={{
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <Image
        src={"/banner-before.png"}
        alt="page pack bg"
        fill={true}
        style={{
          objectFit: "contain",
          zIndex: 0,
          objectPosition: "left bottom",
        }}
      />
      <div className="z-2 relative">
        <Header />
      </div>
    </div>
  );
}

export default HeaderStickerPack;
