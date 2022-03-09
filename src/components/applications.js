import { useEffect, useState } from "react";
import FormModel from "./formModel";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [index, setIndex] = useState("");
  useEffect(() => {
    fetch(
      "https://bootcamp-2022.devtest.ge/api/applications?token=cc8ea109-b58e-4c6d-828a-535c89c27113"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("something went wrong 🤔");
        }
      })
      .then((res) => {
        setApplications(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="submitted-page-wrapper">
      <div className="submitted-page">
        <h2 className="application-page-header">Submitted aplications</h2>
        {applications.map((elem, idx) => {
          return (
            <div key={idx}>
              <div className="preview-box">
                <p>{idx}</p>
                <i
                  className="arrows"
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></i>
              </div>

              {idx === index && <FormModel elem={elem} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Applications;
