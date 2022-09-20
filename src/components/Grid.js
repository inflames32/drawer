import { v4 as uuidv4 } from "uuid";
import "../assets/CSS/grid.css";
const Grid = ({ color, cellsColored, width, height }) => {
  console.log(color);
  const handleColor = (evt) => {
    evt.target.style.background = color;

    const attrName = evt.target.getAttribute("name");
    /* const color = evt.target.background; */
    cellsColored.push({ attrName, color });
  };

  // nombre de lignes
  let numberOfRows = [];
  for (let i = 0; i < width; i++) {
    numberOfRows.push(i);
  } //nombre de colones
  let numberOfCols = [];
  for (let i = 0; i < height; i++) {
    numberOfCols.push(i);
  }

  return (
    <div className="grid_container">
      <div className="grid">
        {numberOfRows.map((row) => (
          <div className="row" key={uuidv4()} name={uuidv4()}>
            {numberOfCols.map(() => (
              <div
                className="col"
                key={uuidv4()}
                name={uuidv4()}
                onClick={handleColor}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
