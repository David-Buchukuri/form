import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Home from "./home";
import Submit from "./submit";

import { useState } from "react";

const Form = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    return setPage(page + 1);
  };

  const handleBack = () => {
    return setPage(page - 1);
  };

  const displayPage = () => {
    if (page >= 0 && page <= 5) {
      switch (page) {
        case 1:
          return <Page1 />;
        case 2:
          return <Page2 />;
        case 3:
          return <Page3 />;
        case 4:
          return <Page4 />;
        case 5:
          return <Submit back={handleBack} />;
        default:
          return <Home forward={handleNext} />;
      }
    }
  };
  return (
    <div className="form-wrapper">
      {console.log(page)}
      <div className="page">{displayPage()}</div>

      {page >= 1 && page <= 4 && (
        <div className="footer">
          <button className="arrow" onClick={handleBack}>
            {"<"}
          </button>
          <button className="arrow" onClick={handleNext}>
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
