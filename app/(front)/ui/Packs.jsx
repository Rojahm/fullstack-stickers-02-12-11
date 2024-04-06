import Link from "next/link";
import Image from "next/image";
function Packs({ packs }) {
  return (
    <>
      {packs.map((pack, i) => (
        <Link href={`/sticker-packs/${pack.title}`} key={i}>
          <div
            className={`cover w-auto h-auto rounded-xl hover:bg-black bg-cover`}
            style={{
              backgroundImage: `url(${pack.cover})`,
              backgroundColor: `${pack.color}`,
            }}
          >
            <Image
              src={pack.imageLink}
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
    </>
  );
}

export default Packs;
