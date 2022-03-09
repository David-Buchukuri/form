import { useEffect, useState } from "react";
import calendar from "../images/calendar.png";
const FormModel = ({ elem }) => {
  const [actualSkills, setActualSkills] = useState([]);

  useEffect(() => {
    // console.log(elem);
    fetch("https://bootcamp-2022.devtest.ge/api/skills")
      .then((res) => {
        if (!res.ok) throw new Error("something went wrong, try again later");
        return res.json();
      })

      .then((res) => {
        let idArr = elem.skills.map((el) => el.id);

        let skillsReady = res
          .map((el) => {
            if (idArr.includes(el.id)) {
              return {
                exp: elem.skills.find((elm) => elm.id === el.id).experience,
                title: el.title,
              };
            }
          })
          .filter((elem) => elem !== undefined);
        setActualSkills(skillsReady);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="formModel">
      {/* {} */}
      <div className="personal-info">
        <h2>Personal Information</h2>
        <div style={{ marginTop: "44px" }}>
          <p>First Name</p>
          <p>{elem.first_name}</p>
        </div>
        <div>
          <p>Last Name</p>
          <p>{elem.last_name}</p>
        </div>
        <div>
          <p>E Mail</p>
          <p>{elem.email}</p>
        </div>
        <div>
          <p>Phone</p>
          <p>{elem.phone}</p>
        </div>
      </div>
      {/* {} */}
      <div className="skillset">
        <h2>Skillset</h2>
        {actualSkills.map((elem, idx) => {
          return (
            <div key={idx} className="skills-wrapper">
              <p>{elem.title}</p>
              <p>years of experience: {elem.exp}</p>
            </div>
          );
        })}
      </div>

      <div className="covid">
        <h2>Covid Situation</h2>
        <div>
          <div className="section">
            <p style={{ fontSize: "18px" }}>how would you prefer to work?</p>
            <div className="option">
              <input
                type="radio"
                checked={elem.work_preference === "from_home"}
                disabled
              />
              <p>from sairme office</p>
            </div>

            <div className="option">
              <input
                type="radio"
                checked={elem.work_preference === "from_office"}
                disabled
              />
              <p>from home</p>
            </div>
            <div className="option">
              <input
                type="radio"
                checked={elem.work_preference === "hybrid"}
                disabled
              />
              <p>hybrid</p>
            </div>
          </div>

          <div className="section">
            <p style={{ fontSize: "18px" }}>did you have covid 19?</p>
            <div className="option">
              <input type="radio" checked={elem.had_covid} disabled />
              <p>yes</p>
            </div>

            <div className="option">
              <input type="radio" checked={!elem.had_covid} disabled />
              <p>no</p>
            </div>
          </div>

          {elem.had_covid && (
            <div className="section">
              <p style={{ fontSize: "18px" }}>when did you have covid 19?</p>

              <div className="option">
                <div className="date-input-readonly">
                  <input
                    disabled
                    type="date"
                    readOnly
                    value={elem.had_covid_at}
                  />
                  <img
                    style={{ height: "20px" }}
                    src={calendar}
                    alt="calendar"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="section">
            <p style={{ fontSize: "18px" }}>have you been vaccinated?</p>
            <div className="option">
              <input disabled type="radio" readOnly checked={elem.vaccinated} />
              <p>yes</p>
            </div>
            <div className="option">
              <input
                disabled
                type="radio"
                readOnly
                checked={!elem.vaccinated}
              />
              <p>no</p>
            </div>
          </div>

          {elem.vaccinated && (
            <div className="section">
              <p style={{ fontSize: "18px" }}>
                When did you get your covid vaccine?
              </p>
              <div className="option">
                <div className="date-input-readonly">
                  <input
                    disabled
                    type="date"
                    readOnly
                    value={elem.vaccinated_at}
                  />
                  <img
                    style={{ height: "20px" }}
                    src={calendar}
                    alt="calendar"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="insights">
        <h2>Insights</h2>
        <div className="section">
          <p style={{ fontSize: "18px" }}>
            Would you attend Devtalks and maybe organize your own?
          </p>
          <div className="option">
            <input type="radio" checked={elem.will_organize_devtalk} disabled />
            <p>yes</p>
          </div>
          <div className="option">
            <input
              type="radio"
              checked={!elem.will_organize_devtalk}
              disabled
            />
            <p>no</p>
          </div>
        </div>

        {elem.will_organize_devtalk && (
          <div className="section">
            <p style={{ fontSize: "18px" }}>
              What would you speak about at Devtalks?
            </p>

            <div className="devtalk-text-readonly">{elem.devtalk_topic}</div>
          </div>
        )}

        <div className="section">
          <p style={{ fontSize: "18px" }}>Tell us something special</p>

          <div className="devtalk-text-readonly special">
            {elem.something_special}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModel;
