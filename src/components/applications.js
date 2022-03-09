import { useEffect, useState } from "react";
import FormModel from "./formModel";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [index, setIndex] = useState("");
  useEffect(() => {
    fetch(
      "https://bootcamp-2022.devtest.ge/api/applications?token=9e75b10b-2115-45ef-bf9a-1f3de4bbb4b7"
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
    <div className="submitted-page">
      <h2 style={{ alignSelf: "flex-start" }}>Submitted aplications</h2>
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
  );
};

export default Applications;
