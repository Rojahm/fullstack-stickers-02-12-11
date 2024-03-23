"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
// Custom componenets
import { addNewPack, updatePack } from "@/app/lib/actions";
import CoverInput from "../(ui)/CoverInput";
import RelatedPacksInput from "../(ui)/RelatedPacksInput";
import ColorInput from "../(ui)/ColorInput";
import ShowInput from "../(ui)/ShowInput";
import LinkInput from "../(ui)/LinkInput";
import TitleInput from "../(ui)/TitleInput";
import ImageInput from "../(ui)/ImageInput";
import DescriptionInput from "../(ui)/DescriptionInput";
// import { fetchOnePack, fetchPacksName } from "@/app/lib/data";

function Form({ title, id }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [packsNames, setPacksNames] = useState([]);

  // Defaul values if it is an edit page
  const [defaultTitle, setDefaultTitle] = useState();
  const [defaultImage, setDefaultImage] = useState();
  const [defaultCover, setDefaultCover] = useState();
  const [defaultDescription, setDefaultDescription] = useState();
  const [defaultLink, setDefaultLink] = useState();
  const [defaultRelatedPacks, setDefaultRelatedPacks] = useState([]);
  const [defaultShow, setDefaultShow] = useState();
  const [defaultColor, setDefaultColor] = useState();
  useEffect(() => {
    if (pathname.startsWith("/dashboard/packs")) {
      axios.get(`${process.env.SRV}/stickerPacksNames`).then((res) => {
        setPacksNames(res.data);
      });
    }
    if (pathname.startsWith("/dashboard/packs/edit")) {
      setIsLoading(true);
      axios.get(`${process.env.SRV}/stickerPack/${id}`).then((res) => {
        setDefaultTitle(res.data.title.split("-").join(" "));
        setDefaultImage(res.data.imageLink);
        setDefaultCover(res.data.cover);
        setDefaultDescription(res.data.description);
        setDefaultLink(res.data.link);
        setDefaultRelatedPacks(res.data.relatedPacks);
        setRelatedPacks(res.data.relatedPacks);
        setDefaultShow(res.data.show);
        setDefaultColor(res.data.color);
        setIsLoading(false);
      });
    }
  }, []);
  // Handle Related Packs
  const [relatedPacks, setRelatedPacks] = useState([]);
  const handleRelatedPacks = (e, title) => {
    if (title.length > 0) {
      if (e.target.checked === true) {
        if (!relatedPacks.includes(title)) {
          setRelatedPacks([...relatedPacks, title]);
        }
      } else if (e.target.checked === false) {
        setRelatedPacks(
          relatedPacks.filter((relatedPack) => relatedPack != title)
        );
      }
    }
  };
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // if (relatedPacks.length > 0) {
    //Add Related Packs
    formData.append("relatedPacks", relatedPacks);
    e.target.reset();
    setRelatedPacks([]);
    // }
    if (pathname === "/dashboard/packs/new") {
      await addNewPack(formData);
    } else if (pathname.startsWith("/dashboard/packs/edit")) {
      await updatePack(formData, id);
      router.back();
    }
  };

  //Handle Tags
  const [tags, setTags] = useState([]);
  const handleTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags([...tags, e.target.value]);
      e.target.value = null;
    }
  };
  const deleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag != tagToDelete));
  };
  // Prevent to submit update with enter
  const formEnterNoSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-[90%] lg:w-[70%]">
        <h1 className="font-bold text-lg">{title}</h1>
        <hr />
      </div>
      {!isLoading ? (
        <form
          onSubmit={handleSubmit}
          onKeyDown={formEnterNoSubmit}
          className="flex flex-col justify-center items-center w-[90%] md:w-[80%] lg:w-[60%] my-10 gap-5"
        >
          {/* One Input */}
          <TitleInput name="title" defaultValue={defaultTitle} />
          {/* One Input */}
          {/* One Input */}
          <ImageInput name="image" defaultValue={defaultImage} />
          {/* One Input */}
          {/* One Input */}
          <DescriptionInput
            name="description"
            defaultValue={defaultDescription}
          />
          {/* One Input */}
          {/* One Input */}
          <LinkInput name="link" defaultValue={defaultLink} />
          {/* One Input */}
          {/* One Input */}
          {pathname.startsWith("/dashboard/stickers/") ? (
            <>
              <div className="flex justify-center items-center gap-5 w-full">
                <label
                  htmlFor="tags"
                  className="font-semibold w-[20%] md:w-[10%]"
                >
                  Tags :
                </label>
                <input
                  type="text"
                  id="tags"
                  // name="tags"
                  onKeyDown={handleTag}
                  className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
                ></input>
              </div>
              <div className="flex flex-wrap gap-3 justify-start items-center w-[95%] md:w-[80%] lg:w-[70%]">
                {tags.map((tag, i) => (
                  <div
                    key={i}
                    className="border rounded-md px-2 text-sky-300 border-sky-300 shadow-sm"
                  >
                    {tag}{" "}
                    <span
                      onClick={() => deleteTag(tag)}
                      className="hover:cursor-pointer text-zinc-500"
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
              // {/* One Input */}
            </>
          ) : (
            <>
              {/* // One Input */}
              <CoverInput name="cover" defaultValue={defaultCover} />
              {/* // One Input */}
              {/* // One Input */}
              <RelatedPacksInput
                packsNames={packsNames}
                defaultValue={defaultRelatedPacks}
                onClick={handleRelatedPacks}
              />
              {/* One Input */}
            </>
          )}
          {/* One Input */}
          <ShowInput name="show" defaultValue={defaultShow} />
          {/* One Input */}
          {/* One Input */}
          <ColorInput name="color" defaultValue={defaultColor} />
          {/* One Input */}
          <button className="bg-sky-100 w-[20%] rounded-md shadow-md leading-9 hover:bg-sky-200 hover:shadow-lg hover:text-white">
            Save
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default Form;
