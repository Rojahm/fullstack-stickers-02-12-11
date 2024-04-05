import PacmanLoader from "react-spinners/PacmanLoader";
function Spinner() {
  return (
    <div className="flex justify-center items-center my-5">
      <PacmanLoader color="#f4cf47" size={25} />
    </div>
  );
}

export default Spinner;
