import "./colorspicker.css";
const ColorsPicker = ({ color, setColor }) => {
  const handleColor = (evt) => {
    const colorToProps = evt.target.id;
    console.log(colorToProps);
    setColor(colorToProps);
  };

  return (
    <div className="colorspicker_container">
      <div
        className="color blue"
        onClick={handleColor}
        id="blue"
        name="blue"
      ></div>

      <div
        className="color red"
        onClick={handleColor}
        id="red"
        name="red"
      ></div>

      <div
        className="color green"
        onClick={handleColor}
        id="green"
        name="green"
      ></div>
      <div
        className="color yellow"
        onClick={handleColor}
        id="yellow"
        name="yellow"
      ></div>
      <div
        className="color white"
        onClick={handleColor}
        id="white"
        name="white"
      ></div>
    </div>
  );
};

export default ColorsPicker;
