import Header from "../ui/Header";

function PackPageHero() {
  return (
    <div className="bg-hero-background-image flex flex-col bg-cover min-h-[200px] h-auto relative">
      <Header color={"white"} />
      <div className="flex flex-col justify-center items-center my-20 pb-14 mx-32 lg:mx-44 gap-10 lg:gap-16">
        <h1 className="text-white font-extrabold text-3xl md:text-[40px] lg:text-[60px] uppercase drop-shadow-md">
          ALL STICKER PACKS
        </h1>
        <div className="text-center">
          <p className="text-white text-xl font-bold">
            Sticker Mania’s custom stickers are totally unlike anything you’ve
            ever seen before. They’re made, shared and remixed by the Sticker
            Mania fam, so Sticker Mania’s the only place you’ll find them. Oh
            also? They’re 100% free and ALL up for grabs for you to play with.
            So what are you waiting for?
          </p>
        </div>
      </div>

      <div className="relative h-[6.25vw] -bottom-1 lg:-bottom-2 bg-hero-bg-curve bg-contain"></div>
    </div>
  );
}

export default PackPageHero;
