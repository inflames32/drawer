import "../assets/CSS/grid.css";

const Grid = ({ gridSize, color, setCellsColored, cellsColored }) => {
  const handleColor = (evt) => {
    evt.target.style.backgroundColor = color;
    const caseName = evt.target.getAttribute("name");
    console.log("ici", color, caseName);
    cellsColored.push({ caseName, color });
    console.log(cellsColored);
  };

  let array = [];
  for (let i = 0; i < gridSize; i++) {
    array.push(i);
  }

  return (
    <div className="grid_container">
      {array.map((elem) => (
        <div
          className="cell"
          key={elem}
          name={elem}
          onClick={handleColor}
        ></div>
      ))}
    </div>
  );
};

export default Grid;
