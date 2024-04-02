//Custom components
import HeroPage from "./Hero";
import Explore from "./ui/Explore";
import NewStickers from "@/app/(front)/ui/NewStickers";
import StickerPacks from "./ui/StickerPacks";
import TopStickers from "./ui/TopStickers";

export default function Home() {
  return (
    <main>
      <HeroPage />
      <NewStickers />
      <StickerPacks />
      <TopStickers />
      <Explore />
    </main>
  );
}
