import "../assets/CSS/colorspicker.css";
import "aos/dist/aos.css";
const ColorsPicker = ({
  selectedColor,
  setSelectedColor,
  setDisplayColorPicker,
  displayColorPicker,
  background,
  setBackground,
  ColorChooseWithPicker,
  setColorChooseWithPicker,
  arrayOfColors,
  setArrayOfColors,
}) => {
  // selectionner la couleur
  const handleColor = (evt) => {
    const selectedColor = evt.target.id;

    setSelectedColor(selectedColor);
  };

  return (
    <div className="colorspicker_container">
      <div
        className={
          selectedColor === "blue" ? "color blue selected_color" : "color blue"
        }
        onClick={handleColor}
        id="blue"
        name="blue"
      ></div>

      <div
        className={
          selectedColor === "red" ? "color red selected_color" : "color red"
        }
        onClick={handleColor}
        id="red"
        name="red"
      ></div>

      <div
        className={
          selectedColor === "green"
            ? "color green selected_color"
            : "color green"
        }
        onClick={handleColor}
        id="green"
        name="green"
      ></div>

      <div
        className={
          selectedColor === "yellow"
            ? "color yellow selected_color"
            : "color yellow"
        }
        onClick={handleColor}
        id="yellow"
        name="yellow"
      ></div>

      <div
        className={
          selectedColor === "black"
            ? "color black selected_color"
            : "color black"
        }
        onClick={handleColor}
        id="black"
        name="black"
      ></div>

      <div
        className={
          selectedColor === "white"
            ? "color white selected_color"
            : "color white"
        }
        onClick={handleColor}
        id="white"
        name="white"
      ></div>
    </div>
  );
};

export default ColorsPicker;
