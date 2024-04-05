//Custom components
import HeroPage from "./(front)/Hero";
import Explore from "./(front)/ui/Explore";
import NewStickers from "@/app/(front)/ui/NewStickers";
import StickerPacks from "./(front)/ui/StickerPacks";
import TopStickers from "./(front)/ui/TopStickers";

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
