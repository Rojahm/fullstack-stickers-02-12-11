function PackSelectionInput({ name, packsNames }) {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <label htmlFor={name} className="font-semibold w-[20%] md:w-[10%]">
        Sticker Pack :
      </label>
      <select
        id={name}
        name={name}
        className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
      >
        {packsNames.map((packName, i) => (
          <option value={packName.title} key={i}>
            {packName.title.split("-").join(" ")}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PackSelectionInput;
