import Image from "next/image";
import Header from "../ui/Header";

function HeroPage() {
  return (
    <>
      <div className="bg-hero-background-image flex flex-col bg-cover min-h-[200px] h-auto relative">
        <Header color={"white"} />
        <div className="flex flex-col justify-center items-center mt-20 gap-10">
          <h1 className="text-white font-extrabold text-3xl md:text-[40px] lg:text-[60px] uppercase drop-shadow-md">
            ChopStick
          </h1>
          <div className="text-center">
            <h2 className="text-white text-xl font-bold">
              Stickers for your Sticker Mania extension.
            </h2>
            <h2 className="text-white text-xl font-bold">
              Fresh sticker packs are already waiting for you.
            </h2>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/sticker-mania-bg.png"}
            width={900}
            height={500}
            alt="stickers"
          />
        </div>
        <div className="relative h-[6.25vw] -bottom-1 lg:-bottom-2 bg-hero-bg-curve bg-contain"></div>
      </div>

      <div className="flex justify-center items-center my-12">
        <button className="bg-[#814997] antialiased text-white font-bold text-2xl px-10 py-3 rounded-3xl">
          Download sticker Mania
        </button>
      </div>
    </>
  );
}

export default HeroPage;
