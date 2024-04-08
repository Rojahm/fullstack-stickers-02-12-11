"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { searchSticker } from "@/app/lib/data";
import Stickers from "@/app/(front)/ui/Stickers";
function StickerResult() {
  const params = useSearchParams();
  const query = params.get("query");
  const [stickers, setStickers] = useState([]);
  useEffect(() => {
    const handleSearch = async (query) => {
      if (query) {
        const stickerResult = await searchSticker(query);
        setStickers(stickerResult.result);
      } else {
        setStickers([]);
      }
    };
    handleSearch(query);
  }, []);
  return (
    <div>
      <Stickers stickers={stickers} />
    </div>
  );
}

export default StickerResult;
