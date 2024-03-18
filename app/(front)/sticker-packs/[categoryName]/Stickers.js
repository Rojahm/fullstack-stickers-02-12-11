import Image from "next/image";
import Link from "next/link";
function Stickers() {
  const stickers = [
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/among-us-red-jumps-512x512.png",
      link: "/",
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/egg-bacon-love-512x512.png",
      link: "/",
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/dumbo-smile-512x512.png",
      link: "/",
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/playstation-symbols-512x512.png",
      link: "/",
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/heart-peace-512x512.png",
      link: "/",
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/heart-peace-512x512.png",
      link: "/",
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/heart-peace-512x512.png",
      link: "/",
    },
    {
      title: "Among Us Red Character Jumps Sticker",
      imageLink: "/images/heart-peace-512x512.png",
      link: "/",
    },
  ];
  return (
    <div className="my-16 w-[80%]">
      <Link href={"/"} className="text-2xl font-bold">
        Browse our sticker pack Sanrio
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md" />
      <div className="mt-4 grid grid-cols-5 gap-5">
        {stickers.map((sticker, i) => (
          <div
            key={i}
            className="my-2 py-5 px-4 rounded-md shadow-xl shadow-[#814997]/40 hover:shadow-3xl hover:shadow-[#814997]/80"
          >
            <Link
              href={`${sticker.link}`}
              className="flex flex-col justify-center items-center gap-4"
            >
              <Image
                src={sticker.imageLink}
                width={200}
                height={200}
                alt={sticker.title}
              />
              <p className="text-center line-clamp-3 leading-5 font-semibold">
                {sticker.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stickers;
