import "./colorspicker.css";
const ColorsPicker = () => {
  const getColor = (e) => {
    const color = e.target.style.backgroundColor;
    console.log(color);
  };

  return (
    <div className="colorspicker_container">
      <div
        className="color blue"
        onClick={getColor}
        id="test"
        name="blue"
      ></div>

      <div className="color red" onClick={getColor} id="test" name="red"></div>

      <div
        className="color green"
        onClick={getColor}
        id="test"
        name="green"
      ></div>
    </div>
  );
};

export default ColorsPicker;
