"use server";
import axios from "axios";

export async function addNewPack(formData) {
  const data = {
    title: formData.get("title"),
    imageLink: formData.get("image"),
    cover: formData.get("cover"),
    link: formData.get("link"),
    relatedPacks: formData.get("relatedPacks").split(","),
    show: formData.get("show"),
    color: formData.get("color"),
  };
  axios.post(`${process.env.SRV}/newstickerPack`, data).then((res) => {
    console.log(res.data.msg);
  });
}
export async function deletePack(id) {
  axios.post(`${process.env.SRV}/deletestickerPack/${id}`).then((res) => {
    console.log(res.data.msg);
    // // window.location.reload();
  });
}
