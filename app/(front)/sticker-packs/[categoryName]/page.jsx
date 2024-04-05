import Image from "next/image";
import Link from "next/link";
// Custom Components
import HeaderStickerPack from "./HeaderStickerPack";
import Stickers from "./Stickers";
import NotFound from "@/app/not-found";

// export const revalidate = 60; // revalidate at most every minute
export const dynamicParams = true; // to show new pages for pack names that doesnt exist on build time

// Generate AllPossible Params
export async function generateStaticParams() {
  const packs = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/stickerPacks`
  ).then((res) => res.json());
  // Returns an array of Object with key of categoryName
  const result = packs.map((pack) => ({
    categoryName: pack.title,
  }));

  return result;
}

//Get A Sticker Pack
async function getPack(categoryName) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SRV_URL}/allstickerPack/${categoryName}`
  );
  const data = await res.json();
  //returns an array with one object and we want ONE object
  return data[0];
}

// Main Component
async function StickerPackSinglePage({ params }) {
  const title = params.categoryName;
  const pack = await getPack(title);
  return (
    <>
      {/* check if there was a pack retrieved */}
      {pack ? (
        <>
          {/* Curly header with color of the pack */}
          <HeaderStickerPack color={pack.color} textColor={"black"} />
          <div className="flex flex-col justify-center items-center">
            {/* Bread Crumb */}
            <div className="w-[90%] lg:w-[80%] my-6 flex gap-2 leading-6 text-[19px] font-semibold">
              <Link href={"/"}>Home</Link>
              <Link href={"/sticker-packs"}>/ Sticker Packs</Link>
              <div className="text-[#814997] capitalize">
                / {pack.title.split("-").join(" ")}
              </div>
            </div>
            {/* Pack Container */}
            <div className="mt-10 w-[90%] lg:w-[70%] flex flex-col gap-5 justify-center items-center md:flex-row rounded-3xl shadow-lg shadow-[#814997]/40 p-5">
              {/* image */}
              <div className="bg-white md:w-[40%] h-full p-4 -translate-y-20 md:translate-y-0 md:-translate-x-20 rounded-3xl shadow-lg">
                <Image
                  src={pack.imageLink}
                  width={500}
                  height={500}
                  alt={pack.title}
                  // className="md:absolute md:bottom-48 lg:bottom-24 md:-left-32 lg:-left-28 lg:w-[400px]"
                />
              </div>
              {/* details */}
              <div className="flex flex-col gap-5 md:w-[60%]">
                <h1 className="text-4xl font-bold capitalize">
                  {pack.title.split("-").join(" ")}
                </h1>
                <p className="text-[#4e4a67] text-[0.8rem] leading-6">
                  {pack.description}
                </p>
                <div className="flex justify-center items-center">
                  <button className="bg-[purple] hover:bg-[#814997] uppercase text-white text-md font-bold py-3 px-5 rounded-full">
                    Add stickers Pack
                  </button>
                </div>
                <div className="bg-white shadow-lg shadow-[#814997]/40 rounded-3xl border py-8 px-3 lg:translate-x-20">
                  <h2 className="font-bold text-lg">Related sticker packs:</h2>
                  <hr className="border-2 border-[#814997]/20 rounded-full" />
                  <div className="flex flex-wrap gap-5 my-5">
                    {pack.relatedPacks ? (
                      pack.relatedPacks.map((relatedPack, i) => (
                        <Link
                          href={`/sticker-packs/${relatedPack}`}
                          key={i}
                          className="border-[purple] border rounded-3xl px-5 py-1 hover:shadow-xl hover:shadow-[#814997]/40 hover:bg-[mediumpurple] hover:text-white hover:border-[mediumpurple] transition-all ease-in-out duration-200"
                        >
                          {relatedPack.split("-").join(" ")}
                        </Link>
                      ))
                    ) : (
                      <div>No Related Packs</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Show Pack's Stickers */}
            <Stickers title={pack.title} />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default StickerPackSinglePage;
