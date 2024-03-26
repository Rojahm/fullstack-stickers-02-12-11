"use server";
import axios from "axios";
//Packs
export async function addNewPack(formData) {
  const data = {
    title: formData.get("title").trim().split(" ").join("-"),
    imageLink: formData.get("image"),
    cover: formData.get("cover"),
    description: formData.get("description"),
    link: formData.get("link"),
    relatedPacks: formData
      .get("relatedPacks")
      .split(",")
      .filter((relPack) => relPack !== ""),
    show: formData.get("show"),
    color: formData.get("color"),
  };
  // console.log(data);
  // console.log(formData.get("title").trim().split(" ").join("-"));
  axios.post(`${process.env.SRV}/newstickerPack`, data).then((res) => {
    console.log(res.data.msg);
  });
}
export async function updatePack(formData, id) {
  const data = {
    title: formData.get("title").trim().split(" ").join("-"),
    imageLink: formData.get("image"),
    cover: formData.get("cover"),
    description: formData.get("description"),
    link: formData.get("link"),
    relatedPacks: formData
      .get("relatedPacks")
      .split(",")
      .filter((relPack) => relPack !== ""),
    show: formData.get("show"),
    color: formData.get("color"),
  };

  axios.post(`${process.env.SRV}/updatestickerPack/${id}`, data).then((res) => {
    console.log(res.data.msg);
  });
}
export async function deletePack(id) {
  axios.post(`${process.env.SRV}/deletestickerPack/${id}`).then((res) => {
    console.log(res.data.msg);
    // // window.location.reload();
  });
}
//Stickers
export async function addNewSticker(formData) {
  const data = {
    title: formData.get("title").trim().split(" ").join("-"),
    imageLink: formData.get("image"),
    description: formData.get("description"),
    link: formData.get("link"),
    quantity: formData.get("quantity"),
    pack: formData.get("pack"),
    tags: formData
      .get("tags")
      .split(",")
      .filter((relPack) => relPack !== ""),
    show: formData.get("show"),
    color: formData.get("color"),
  };
  axios.post(`${process.env.SRV}/addNewSticker`, data).then((res) => {
    console.log(res.data.msg);
  });
}
export async function updateSticker(formData, id) {
  const data = {
    title: formData.get("title").trim().split(" ").join("-"),
    imageLink: formData.get("image"),
    description: formData.get("description"),
    link: formData.get("link"),
    quantity: formData.get("quantity"),
    pack: formData.get("pack"),
    tags: formData
      .get("tags")
      .split(",")
      .filter((relPack) => relPack !== ""),
    show: formData.get("show"),
    color: formData.get("color"),
  };
  axios.post(`${process.env.SRV}//updateSticker/${id}`, data).then((res) => {
    console.log(res.data.msg);
  });
}
export async function deleteSticker(id) {
  axios.post(`${process.env.SRV}/deletestickerPack/${id}`).then((res) => {
    console.log(res.data.msg);
  });
}
