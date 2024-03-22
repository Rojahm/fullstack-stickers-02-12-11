"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { addNewPack } from "@/app/lib/actions";
// import { fetchOnePack, fetchPacksName } from "@/app/lib/data";
function Form({ title, id }) {
  const pathname = usePathname();
  // console.log(pathname);
  // const pack = fetchOnePack(id);
  // console.log(pack);
  const [isLoading, setIsLoading] = useState(false);
  const [packsNames, setPacksNames] = useState([]);
  // Defaul values
  const [defaultTitle, setDefaultTitle] = useState();
  const [defaultImage, setDefaultImage] = useState();
  const [defaultCover, setDefaultCover] = useState();
  const [defaultLink, setDefaultLink] = useState();
  const [defaultRelatedPacks, setDefaultRelatedPacks] = useState([]);
  const [defaultShow, setDefaultShow] = useState();
  const [defaultColor, setDefaultColor] = useState();
  useEffect(() => {
    if (pathname.startsWith("/dashboard/packs")) {
      axios.get(`${process.env.SRV}/stickerPacksNames`).then((res) => {
        // console.log(res.data);
        setPacksNames(res.data);
      });
    }
    if (pathname.startsWith("/dashboard/packs/edit")) {
      setIsLoading(true);
      axios.get(`${process.env.SRV}/stickerPack/${id}`).then((res) => {
        setDefaultTitle(res.data.title);
        setDefaultImage(res.data.imageLink);
        setDefaultCover(res.data.cover);
        setDefaultLink(res.data.link);
        setDefaultRelatedPacks(res.data.relatedPacks);
        setDefaultShow(res.data.show);
        setDefaultColor(res.data.color);
        setIsLoading(false);
      });
    }
  }, []);
  // Handle Related Packs
  const [relatedPacks, setRelatedPacks] = useState([]);
  const handleRelatedPacks = (title) => {
    if (title.length > 0) {
      setRelatedPacks([...relatedPacks, title]);
    }
  };
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("relatedPacks", relatedPacks);
    if (pathname === "/dashboard/packs/new") {
      await addNewPack(formData);
    }
    e.target.reset();
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
          <div className="flex justify-center items-center gap-5 w-full">
            <label
              htmlFor="title"
              className="font-semibold w-[20%] md:w-[10%] "
            >
              Title :
            </label>
            <input
              defaultValue={defaultTitle}
              required
              type="text"
              id="title"
              name="title"
              className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
            ></input>
          </div>
          {/* One Input */}
          {/* One Input */}
          <div className="flex justify-center items-center gap-5 w-full">
            <label htmlFor="image" className="font-semibold w-[20%] md:w-[10%]">
              Image :
            </label>
            <input
              defaultValue={defaultImage}
              required
              type="text"
              id="image"
              name="image"
              className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
            ></input>
          </div>
          {/* One Input */}
          {/* One Input */}
          {pathname.startsWith("/dashboard/packs/") ? (
            <div className="flex justify-center items-center gap-5 w-full">
              <label
                htmlFor="cover"
                className="font-semibold w-[20%] md:w-[10%]"
              >
                Cover :
              </label>
              <input
                defaultValue={defaultCover}
                required
                type="text"
                id="cover"
                name="cover"
                className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
              ></input>
            </div>
          ) : null}
          {/* One Input */}
          {/* One Input */}
          <div className="flex justify-center items-center gap-5 w-full">
            <label htmlFor="link" className="font-semibold w-[20%] md:w-[10%]">
              Link :
            </label>
            <input
              defaultValue={defaultLink}
              required
              type="text"
              id="link"
              name="link"
              className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
            ></input>
          </div>
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
            </>
          ) : (
            // {/* One Input */}
            // {/* One Input */}
            <div className="flex justify-center items-center gap-5 w-full">
              <label
                htmlFor="relatedPacks"
                className="font-semibold w-[20%] md:w-[10%]"
              >
                Related Packs :
              </label>
              <div className="flex flex-wrap gap-3 w-[70%]">
                {packsNames.map((packsName, i) => (
                  <div className="flex gap-1">
                    {packsName.title}
                    <input
                      defaultChecked={defaultRelatedPacks.includes(
                        packsName.title
                      )}
                      // defaultChecked={true}
                      value={packsName.id}
                      type="checkbox"
                      id="relatedPacks"
                      onClick={() => handleRelatedPacks(packsName.title)}
                    ></input>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* One Input */}
          {/* One Input */}
          <div className="flex justify-center items-center gap-5 w-full">
            <label htmlFor="show" className="font-semibold w-[20%] md:w-[10%]">
              Show :
            </label>
            <select
              defaultValue={defaultShow}
              required
              type="select"
              id="show"
              name="show"
              className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          {/* One Input */}
          {/* One Input */}
          <div className="flex justify-center items-center gap-5 w-full">
            <label htmlFor="color" className="font-semibold w-[20%] md:w-[10%]">
              Color :
            </label>
            <div className="w-[70%]">
              <input
                defaultValue={defaultColor}
                required
                type="color"
                id="color"
                name="color"
                className="border border-sky-200 rounded-md px-2 py-1 outline-sky-300 h-10"
              ></input>
            </div>
          </div>
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
