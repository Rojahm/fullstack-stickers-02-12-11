import Image from "next/image";
import StickerPackSingleLayout from "./layout2";
function StickerPackSinglePage() {
  return (
    <StickerPackSingleLayout>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row mx-[40px] lg:mx-[100px] rounded-3xl shadow-lg shadow-[#814997]/40 p-5">
          <div className="relative w-[400vw]">
            <Image
              src={
                "/images/StickerPacks/sanrio-hello-kitty-bathing-suit-512x512-512x512.png"
              }
              width={300}
              height={300}
              alt="hello kitty"
              className="absolute bottom-32 -left-20"
              style={
                {
                  // objectPosition: "left bottom",
                  // position: "absolute",
                  // bottom: 100,
                  // left: -110,
                }
              }
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">Sanrio</h1>
            <p>
              For those who adore the realm of cute, or kawaii in Japanese
              culture, the name Sanrio instantly conjures up a delightful parade
              of characters. From the iconic Hello Kitty to the lovable penguin
              Badtz-Maru, Sanrio is a universally recognized brand that
              personifies charm and whimsy. Sanrio is a Japanese company, has
              been spreading joy and cuteness since its inception in 1960. Known
              worldwide for its design, licensing, and production of products
              centered around kawaii characters, it has solidified its position
              in the pop culture landscape. We are adding a fanart Sanrio
              sticker packs have become a beloved trend, amplifying the appeal
              of these characters in innovative and creative ways. In our fanart
              pack you can find many Sanrio characters in form of stickers you
              can stick on your screen.
            </p>
            <button>Add stickers Pack</button>
            <div className="shadow-lg shadow-[#814997]/40 rounded-3xl border py-8 px-3">
              <h2>Related sticker packs:</h2>
              <hr className="border-2 border-[#814997]/20 rounded-full" />
              <div className="flex flex-wrap">
                <button>cartoons</button>
                <button>cute cats</button>
                <button>cute</button>
                <button>disney cartoons</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StickerPackSingleLayout>
  );
}

export default StickerPackSinglePage;
