import { HiOutlinePlus, HiOutlineMinus, HiOutlineXMark } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import "../assets/CSS/GridSize.css";
const GridSize = ({ setWidth, width, height, setHeight }) => {
  const decrementWidth = () => {
    if (width === 1) {
      return;
    } else {
      setWidth(width - 1);
    }
  };
  const incrementWidth = () => {
    setWidth(width + 1);
  };
  const decrementHeigth = () => {
    if (height === 1) {
      return;
    } else {
      setHeight(height - 1);
    }
  };
  const incrementHeigth = () => {
    setHeight(height + 1);
  };

  return (
    <div className="grid_size_container">
      <div className="grid_size_width">
        <span className="grid_size_label">Width</span>
        <button className="grid_size_btn" onClick={decrementHeigth}>
          <HiOutlineMinus />
        </button>
        <span className="grid_size_input" value={height} min={1}>
          {height}
        </span>

        <button className="grid_size_btn" onClick={incrementHeigth}>
          <HiOutlinePlus />
        </button>
      </div>

      <span className="x">
        <ImCross />
      </span>
      <div className="grid_size_height">
        <span className="grid_size_label">Height</span>
        <button className="grid_size_btn" onClick={decrementWidth}>
          <HiOutlineMinus />
        </button>
        <span className="grid_size_input" min={1}>
          {width}
        </span>
        <button className="grid_size_btn" onClick={incrementWidth}>
          <HiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default GridSize;
