import axios from "axios";
// export async function fetchAllPacks() {
//   axios
//     .get("https://srv-sticker-shop.liara.run/api/stickerPacks")
//     .then((res) => {
//       // console.log(res.data);
//       const data = res.data;
//       return data;
//     });
//   // const res = await fetch(
//   //   "https://srv-sticker-shop.liara.run/api/stickerPacks"
//   // );
//   // const data = await res.json();
//   // console.log(data);
//   // return data;
// }
export function fetchAllPacks() {
  axios.get(`${process.env.SRV}/stickerPacks`).then((res) => {
    // console.log(res.data);
    return res.data;
  });
}
export function fetchOnePack(id) {
  axios.get(`${process.env.SRV}/stickerPack/${id}`).then((res) => {
    // console.log(res.data);
    return res.data;
  });
}

// export function fetchPacksName() {
//   axios.get(`${process.env.SRV}/stickerPacksNames`).then((res) => {
//     // console.log(res.data);
//     return res.data;
//   });
// }

export function fetchAllStickers() {
  axios.get(`${process.env.SRV}/allStickers`).then((res) => {
    // console.log(res.data);
    return res.data;
  });
}

//Search
export const searchPack = async (query, limit) => {
  if (limit) {
    const packDataLimited = await fetch(
      `${process.env.NEXT_PUBLIC_SRV_URL}/searchPack/${query}/?limit=${limit}`
    );
    return packDataLimited.json();
  } else {
    const packData = await fetch(
      `${process.env.NEXT_PUBLIC_SRV_URL}/searchPack/${query}`
    );
    return packData.json();
  }
};
export const searchSticker = async (query, limit) => {
  if (limit) {
    const stickerData = await fetch(
      `${process.env.NEXT_PUBLIC_SRV_URL}/searchSticker/${query}/?limit=${limit}`
    );
    return stickerData.json();
  } else {
    const stickerData = await fetch(
      `${process.env.NEXT_PUBLIC_SRV_URL}/searchSticker/${query}`
    );
    return stickerData.json();
  }
};
