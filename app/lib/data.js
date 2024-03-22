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
export function fetchOnePack(id) {
  axios.get(`${process.env.SRV}/stickerPack/${id}`).then((res) => {
    // console.log(res.data);
    return res.data;
  });
}
