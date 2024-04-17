"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
//Packs
export async function addNewPack(formData) {
  const packImage = formData.get("imageFile");
  const filepath = formData.get("filepath");
  const image = await upload(packImage, filepath);
  const packCover = formData.get("coverFile");
  const cover = await upload(packCover, `${filepath}/covers`);
  const data = {
    title: formData.get("title").trim().split(" ").join("-"),
    imageLink: image,
    cover: cover,
    description: formData.get("description"),
    link: formData.get("link"),
    relatedPacks: formData
      .get("relatedPacks")
      .split(",")
      .filter((relPack) => relPack !== ""),
    show: formData.get("show"),
    color: formData.get("color"),
  };
  axios
    .post(`${process.env.NEXT_PUBLIC_SRV_URL}/newstickerPack`, data)
    .then((res) => {
      console.log(res.data.msg);
    });
}
export async function updatePack(formData, id) {
  const packImage = formData.get("imageFile");
  const filepath = formData.get("filepath");
  const image =
    packImage.size > 0
      ? await upload(packImage, filepath)
      : formData.get("image");
  const packCover = formData.get("coverFile");
  const cover =
    packCover.size > 0
      ? await upload(packCover, `${filepath}/covers`)
      : formData.get("cover");
  const data = {
    title: formData.get("title").trim().split(" ").join("-"),
    imageLink: image,
    cover: cover,
    description: formData.get("description"),
    link: formData.get("link"),
    relatedPacks: formData
      .get("relatedPacks")
      .split(",")
      .filter((relPack) => relPack !== ""),
    show: formData.get("show"),
    color: formData.get("color"),
  };

  axios
    .post(`${process.env.NEXT_PUBLIC_SRV_URL}/updatestickerPack/${id}`, data)
    .then((res) => {
      console.log(res.data.msg);
    });
}
export async function deletePack(id) {
  axios
    .post(`${process.env.NEXT_PUBLIC_SRV_URL}/deletestickerPack/${id}`)
    .then((res) => {
      console.log(res.data.msg);
      // // window.location.reload();
      revalidatePath("/dashboard/packs");
    });
}
//Stickers
export async function addNewSticker(formData) {
  const file = formData.get("imageFile");
  const filepath = formData.get("filepath");
  const image = await upload(file, filepath);
  const data = {
    title: formData.get("title").trim().split(" ").join("-"),
    imageLink: image,
    description: formData.get("description"),
    link: formData.get("link"),
    quantity: formData.get("quantity"),
    price: formData.get("price"),
    pack: formData.get("pack").trim().split(" ").join("-"),
    tags: formData
      .get("tags")
      .split(",")
      .filter((relPack) => relPack !== ""),
    show: formData.get("show"),
    color: formData.get("color"),
  };
  axios
    .post(`${process.env.NEXT_PUBLIC_SRV_URL}/addNewSticker`, data)
    .then((res) => {
      console.log(res.data.msg);
      // return res.data.msg;
    })
    .catch((err) => {
      return err;
    });
}
export async function updateSticker(formData, id) {
  const file = formData.get("imageFile");
  const filepath = formData.get("filepath");
  const image =
    file.size > 0 ? await upload(file, filepath) : formData.get("image");
  const data = {
    title: formData.get("title").trim().split(" ").join("-"),
    imageLink: image,
    description: formData.get("description"),
    link: formData.get("link"),
    quantity: formData.get("quantity"),
    price: formData.get("price"),
    pack: formData.get("pack").trim().split(" ").join("-"),
    tags: formData
      .get("tags")
      .split(",")
      .filter((relPack) => relPack !== ""),
    show: formData.get("show"),
    color: formData.get("color"),
  };
  axios
    .post(`${process.env.NEXT_PUBLIC_SRV_URL}//updateSticker/${id}`, data)
    .then((res) => {
      console.log(res.data.msg);
    });
}
export async function deleteSticker(id) {
  axios
    .post(`${process.env.NEXT_PUBLIC_SRV_URL}/deleteSticker/${id}`)
    .then((res) => {
      revalidatePath("/dashboard/stickers");
      console.log(res.data.msg);
    });
}

// Upload Image to S3
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const upload = async (file, filepath) => {
  const key = `/${filepath}/${file.name}`;
  const endpoint = `https://${process.env.S3_ENDPOINT}`;
  const client = new S3Client({
    region: "default",
    endpoint: endpoint,
    credentials: {
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
    },
  });
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes, "base64");
  const params = {
    Body: buffer,
    Bucket: process.env.BUCKET_NAME,
    Key: key,
  };
  try {
    const res = await client.send(new PutObjectCommand(params));
    // console.log(res);
  } catch (error) {
    console.log("ERRRRORR1", error);
  }
  return `https://${process.env.BUCKET_NAME}.${process.env.S3_ENDPOINT}/${key}`;
};

// USER mgmt
export async function addNewUser(formData) {
  const data = {
    user_id: formData.get("userId"),
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    mobile: formData.get("mobile"),
    role: formData.get("role"),
    address: formData.get("address"),
  };
  axios
    .post(`${process.env.NEXT_PUBLIC_SRV_URL}/newUser`, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
