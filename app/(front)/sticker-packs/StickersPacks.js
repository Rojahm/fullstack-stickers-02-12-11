import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function StickersPacks() {
  const [packs, setPacks] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.SRV}/stickerPacks`).then((res) => {
      setPacks(res.data);
    });
  }, []);
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
      {packs.map((pack, i) => (
        <Link href={`/sticker-packs/${pack.title}`} key={i}>
          <div
            className={`w-auto h-auto rounded-xl  hover:bg-black bg-cover`}
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
              {pack.title.split("-").join(" ")}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default StickersPacks;
