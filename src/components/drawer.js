import "./drawer.css";

const Drawer = ({ casesNumber, totalCases }) => {
  const setColor = () => {
    console.log("color");
  };

  return (
    <div className="drawer_container">
      {}
      <div className="case" onClick={setColor}>
        {casesNumber}
      </div>
      <div className="case" onClick={setColor}>
        {totalCases}
      </div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
      <div className="case" onClick={setColor}></div>
    </div>
  );
};

export default Drawer;
