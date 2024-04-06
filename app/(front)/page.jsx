//Custom components
import HeroPage from "./Hero";
import Explore from "./ui/Explore";
import NewStickers from "@/app/(front)/ui/NewStickers";
import StickerPacks from "./ui/StickerPacks";
import TopStickers from "./ui/TopStickers";
import { Suspense } from "react";
import Loading from "../Loading";
import Title from "@/app/(front)/ui/Title";

export default function Home() {
  return (
    <main>
      <HeroPage />
      <div className="px-6 md:px-12 lg:px-40 flex flex-col">
        <Title title={"New Stickers"} link={"/stickers"} />
        <Suspense fallback={<Loading />}>
          <NewStickers />
        </Suspense>
        <Title title={"Sticker Packs"} link={"/sticker-packs"} />
        <Suspense fallback={<Loading />}>
          <StickerPacks />
        </Suspense>
        <Title title={"Top Stickers"} link={"/stickers"} />
        <Suspense fallback={<Loading />}>
          <TopStickers />
        </Suspense>
      </div>
      <Explore />
    </main>
  );
}
