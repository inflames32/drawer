import "../assets/CSS/Saving.css";
const Saving = ({ pixelsColored, setPixelsColored }) => {
  const savingToLocaleStorage = () => {
    let pixelsColoredStringified = JSON.stringify(pixelsColored);
    localStorage.setItem("pixelsColored", pixelsColoredStringified);
    console.log(pixelsColoredStringified);
  };

  const loadingToLocaleStorage = () => {
    let pixelsColoredUnstringified = localStorage.getItem("pixelsColored");
    let pixelsColoredUnstringifiedJSON = JSON.parse(pixelsColoredUnstringified);
    /*  console.log(pixelsColoredUnstringifiedJSON); */
    setPixelsColored(pixelsColoredUnstringifiedJSON);
    /* console.log(pixelsColored); */
  };

  const removeLocaleStorage = () => {
    localStorage.clear();
  };
  return (
    <div className="saving_container">
      <button className="saving_btn-saving" onClick={savingToLocaleStorage}>
        Save
      </button>
      <button className="savingb_btn-loading" onClick={loadingToLocaleStorage}>
        Load
      </button>
      <button className="savingb_btn-loading" onClick={removeLocaleStorage}>
        Clear
      </button>
    </div>
  );
};

export default Saving;
