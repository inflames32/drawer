import "../assets/CSS/Selector.css";

const Selector = ({ gridSize, setGridSize }) => {
  const handleGridSelection = (e) => {
    let value = e.target.value;
    console.log(value);
    setGridSize(value);
    console.log(gridSize);
  };
  return (
    <select
      name="select"
      id=""
      onChange={handleGridSelection}
      className="grid_selection"
    >
      <option className="option" value="64">
        8 x 8{" "}
      </option>
      <option className="option" value="100">
        10 x 10{" "}
      </option>
      <option className="option" value="400" selected>
        20 x 20
      </option>
      <option className="option" value="1024">
        32 x 32{" "}
      </option>
    </select>
  );
};

export default Selector;
