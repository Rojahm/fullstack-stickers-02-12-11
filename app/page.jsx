import Link from "next/link";
import Image from "next/image";
//Custom components
import HeroPage from "./Hero";
import Explore from "./ui/Explore";
import Footer from "./ui/Footer";
import NewStickers from "./ui/NewStickers";
import TopStickers from "./ui/TopStickers";

export default function Home() {
  const packs = [
    {
      title: "meme",
      cover: "/images/StickerPacks/covers/meme.png",
      image: "/images/StickerPacks/previews-512x512.png",
      link: "/",
      color: "lime-400",
    },
  ];
  return (
    <main>
      <HeroPage />
      <NewStickers />
      <div className="my-10 px-6 md:px-12 lg:px-80 flex flex-col">
        <Link href={"/"} className="text-4xl">
          Sticker Packs
        </Link>
        <hr className="border-[#814997] border-[3px] rounded-md" />
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-5  ">
          {packs.map((pack, i) => (
            <Link href={pack.link} key={i}>
              <div
                className={`w-[400px] h-auto rounded-xl bg-${pack.color} hover:bg-black bg-[url('/images/StickerPacks/covers/meme.png')] bg-cover`}
              >
                <Image
                  src={pack.image}
                  width={200}
                  height={200}
                  alt={pack.title}
                  className="p-3 m-auto"
                />
                <p className="uppercase text-center font-bold text-xl text-white drop-shadow-md">
                  {pack.title}
                </p>
              </div>
            </Link>
          ))}
          {/* <Link href={"/"}>
            <div className="w-[400px] h-auto rounded-xl bg-lime-400 hover:bg-black bg-[url('/images/StickerPacks/covers/meme.png')] bg-cover">
              <Image
                src={"/images/StickerPacks/previews-512x512.png"}
                width={200}
                height={200}
                alt="meme"
                className="p-3 m-auto"
              />
              <p className="uppercase text-center font-bold text-xl text-white drop-shadow-md">
                Memes
              </p>
            </div>
          </Link> */}
        </div>
        <div className="mt-6 flex justify-end ">
          <button className="border border-[#814997] w-[130px] rounded-full text-xl font-semibold py-3 hover:bg-[#814997] hover:shadow-md hover:text-white transition-all ease-in-out duration-200">
            Show More
          </button>
        </div>
      </div>
      <TopStickers />
      <Explore />
      <Footer />
    </main>
  );
}
