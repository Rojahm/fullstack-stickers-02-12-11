function PackSelectionInput({ name, packsNames, setDefaultColor }) {
  const handleColor = (e) => {
    const packColor = e.target.value;
    if (packColor) {
      const pack = packsNames.find((packname) => packname.title === packColor);
      setDefaultColor(pack.color);
    }
  };
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <label htmlFor={name} className="font-semibold w-[20%] md:w-[10%]">
        Sticker Pack :
      </label>
      <select
        required
        onChange={handleColor}
        id={name}
        name={name}
        className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300 "
      >
        <option></option>
        {packsNames
          ? packsNames.map((packName, i) => (
              <option value={packName.title} key={i}>
                {packName.title.split("-").join(" ")}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

export default PackSelectionInput;
