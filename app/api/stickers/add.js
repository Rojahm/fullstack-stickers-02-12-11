import connectMongo from "@/utils/connectMongo";
import Sticker from "@/models/Sticker";
export default async function addStickers(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("GETING DOCUMENT");
    await Sticker.create(req.body);
    console.log("GOT ALL DOCUMENT");

    res.json({ msg: "new sticker ADDED" });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
