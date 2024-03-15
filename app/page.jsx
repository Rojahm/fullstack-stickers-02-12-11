//Custom components
import HeroPage from "./Hero";
import Explore from "./ui/Explore";
import Footer from "./ui/Footer";
import NewStickers from "./ui/NewStickers";
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
      <Footer />
    </main>
  );
}
