import Header from "@/app/ui/Header";
import Image from "next/image";

function HeaderStickerPack({ color, textColor }) {
  return (
    <div
      className="h-[16vh] lg:h-[20vh] relative"
      style={{ backgroundColor: `${color}` }}
    >
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
        <Header color={textColor} />
      </div>
    </div>
  );
}

export default HeaderStickerPack;
