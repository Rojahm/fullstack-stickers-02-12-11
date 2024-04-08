import Header from "../ui/Header";

function PackPageHero({ title, text }) {
  return (
    <div className="bg-hero-background-image flex flex-col bg-cover min-h-[200px] h-auto relative w-full">
      <Header color={"white"} />
      <div className="flex flex-col justify-center items-center my-20 pb-14 mx-32 lg:mx-44 gap-10 lg:gap-16">
        <h1 className="text-white font-extrabold text-3xl md:text-[40px] lg:text-[60px] uppercase drop-shadow-md">
          {title}
        </h1>
        <div className="text-center">
          <p className="text-white text-xl font-bold">{text}</p>
        </div>
      </div>

      <div className="relative h-[6.25vw] -bottom-1 md:-bottom-2 bg-hero-bg-curve bg-contain"></div>
    </div>
  );
}

export default PackPageHero;
