function ShowInput({ name, defaultValue }) {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <label htmlFor={name} className="font-semibold w-[20%] md:w-[10%]">
        Show :
      </label>
      <select
        defaultValue={defaultValue}
        required
        type="select"
        id={name}
        name={name}
        className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
      >
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
    </div>
  );
}

export default ShowInput;
