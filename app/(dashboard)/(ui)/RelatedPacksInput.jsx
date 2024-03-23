function RelatedPacksInput({ packsNames, defaultValue, onClick }) {
  return (
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
              defaultChecked={defaultValue.includes(packsName.title)}
              // defaultChecked={true}
              // value={packsName.id}
              type="checkbox"
              id="relatedPacks"
              onClick={(e) => onClick(e, packsName.title)}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPacksInput;
