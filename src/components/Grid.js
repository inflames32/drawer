import "../assets/CSS/grid.css";

const Grid = ({ gridSize, color }) => {
  const setColor = () => {
    console.log("color");
  };

  const handleColor = (evt) => {
    evt.target.style.backgroundColor = color;
    const id = evt.target.id;
    console.log(color, id);
  };

  let array = [];
  for (let i = 0; i < gridSize; i++) {
    array.push(i);
  }

  return (
    <div className="grid_container">
      {array.map((elem) => (
        <div
          className="case"
          key={elem}
          name={elem + 1}
          onClick={handleColor}
        ></div>
      ))}
    </div>
  );
};

export default Grid;
