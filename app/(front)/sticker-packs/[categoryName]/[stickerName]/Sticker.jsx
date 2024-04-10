import Link from "next/link";
import Image from "next/image";

function StickerPage({ pack, sticker }) {
  const formatPrice = (price) => {
    const reversedPrice = String(price).split("").reverse();
    const formattedParts = [];
    for (let i = 0; i < reversedPrice.length; i += 3) {
      // Slice a group of 3 characters (or less for the last group)
      const part = reversedPrice.slice(i, i + 3);
      // Join the characters back into a string and push it to the array
      formattedParts.push(part.reverse().join(""));
    }
    // Reverse the formatted parts array back to the correct order
    const formattedNumber = formattedParts.reverse().join(",");

    return formattedNumber;
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90%] lg:w-[80%] my-6 flex gap-2 leading-6 text-[18px] font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/sticker-packs"}>/ Sticker Packs</Link>
        <Link href={`/sticker-packs/${pack}`} className="uppercase">
          / {pack.split("-").join(" ")}
        </Link>
        <div className="text-[#814997]">
          / {sticker.title.split("-").join(" ")}
        </div>
      </div>
      <div className="mt-10 w-[90%] lg:w-[70%] flex flex-col gap-5 justify-center items-center md:flex-row rounded-3xl shadow-lg shadow-[#814997]/40 p-5">
        {/* image */}
        <div className="bg-white md:w-[40%] h-full p-4 -translate-y-20 md:translate-y-0 md:-translate-x-20 rounded-3xl shadow-lg">
          <Image
            src={sticker.imageLink}
            width={500}
            height={500}
            alt={sticker.title}
          />
        </div>
        {/* details */}
        <div className="flex flex-col gap-5 md:w-[60%]">
          <h1 className="text-4xl font-bold">
            {sticker.title.split("-").join(" ")}
          </h1>
          <p className="text-[#4e4a67] text-[0.8rem] leading-6">
            {sticker.description}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <p className="text-[purple] font-bold">Price:</p>
              <p className="font-semibold">{formatPrice(sticker.price)}</p>
              <p className="text-[purple] font-bold text-xs">Toman</p>
            </div>
            <div>
              <button className="bg-[purple] hover:bg-[#814997] uppercase text-white text-md font-bold py-3 px-5 rounded-s-full">
                -
              </button>
              <button className="p-5 text-[purple]">0</button>
              <button className="bg-[purple] hover:bg-[#814997] uppercase text-white text-md font-bold py-3 px-5 rounded-e-full">
                +
              </button>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Available:</p>
              <p className="text-[purple]">{sticker.quantity}</p>
            </div>
          </div>
          <div className="bg-white shadow-lg shadow-[#814997]/40 rounded-3xl border py-8 px-3 lg:translate-x-20">
            <h2 className="font-bold text-lg">Related sticker packs:</h2>
            <hr className="border-2 border-[#814997]/20 rounded-full" />
            <div className="flex flex-wrap gap-5 my-5">
              {sticker.tags.map((tag, i) => (
                <button
                  key={i}
                  className="border-[purple] border rounded-3xl px-5 py-1 hover:shadow-xl hover:shadow-[#814997]/40 hover:bg-[mediumpurple] hover:text-white hover:border-[mediumpurple] transition-all ease-in-out duration-200"
                >
                  <Link
                    href={`/tags/${tag
                      .trim()
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                  >
                    {tag}
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickerPage;
