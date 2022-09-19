import "../assets/CSS/GridSize.css";
const GridSize = ({ setWidth, width, height, setHeight }) => {
  const incrementRows = () => {
    setWidth(width + 1);
  };
  const incrementCols = () => {
    setHeight(height + 1);
  };

  return (
    <div className="grid_size_container">
      <input type="number" min={1} className="grid_size_input" value={width} />
      <button onClick={incrementRows}>+</button>
      <span className="x">X</span>
      <input
        type="number"
        min={1}
        className="grid_size_input"
        value={height}
      />{" "}
      <button onClick={incrementCols}>+</button>
    </div>
  );
};

export default GridSize;
