"use client";
import Stickers from "../Stickers";
import HeaderSticker from "./HeaderSticker";
import StickerPage from "./Sticker";
import axios from "axios";
import { useState, useEffect } from "react";

function StickerSinglePage({ params }) {
  const [sticker, setSticker] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.SRV}/getStickerByName/${params.stickerName}`)
      .then((res) => {
        setSticker(res.data[0]);
        setLoading(false);
      });
  }, [loading]);
  return (
    <>
      <HeaderSticker color={sticker.color} textColor={"black"} />
      <div className="flex flex-col justify-center items-center">
        {!loading && (
          <StickerPage
            title={params.stickerName}
            pack={params.categoryName}
            targetsticker={sticker}
          />
        )}
        <Stickers title={params.categoryName} />
      </div>
    </>
  );
}

export default StickerSinglePage;
