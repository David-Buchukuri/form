import { useEffect, useState } from "react";

const FormModel = ({ elem }) => {
  const [actualSkills, setActualSkills] = useState([]);

  useEffect(() => {
    console.log(elem);
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
      .then(() => {
        console.log(actualSkills);
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
            <p>how would you prefer to work?</p>
            <div className="option">
              <input
                type="radio"
                // id="home"
                // name="workPreferance"
                // value="from_home"
                checked={elem.work_preference === "from_home"}
                disabled
              />
              <p>from sairme office</p>
            </div>

            <div className="option">
              <input
                type="radio"
                // id="home"
                // name="workPreferance"
                // value="from_home"
                checked={elem.work_preference === "from_office"}
                disabled
              />
              <p>from home</p>
            </div>
            <div className="option">
              <input
                type="radio"
                // id="home"
                // name="workPreferance"
                // value="from_home"
                checked={elem.work_preference === "hybrid"}
                disabled
              />
              <p>hybrid</p>
            </div>
          </div>

          <div className="section">
            <p>did you have covid 19?</p>
            <div className="option">
              <input
                type="radio"
                // id="home"
                // name="workPreferance"
                // value="from_home"
                checked={elem.had_covid}
                disabled
              />
              <p>yes</p>
            </div>

            <div className="option">
              <input
                type="radio"
                // id="home"
                // name="workPreferance"
                // value="from_home"
                checked={!elem.had_covid}
                disabled
              />
              <p>no</p>
            </div>
          </div>

          {elem.had_covid && (
            <div className="section">
              <p>when did you have covid 19?</p>
              <div className="option">
                <input
                  disabled
                  type="date"
                  // id="covidDate"
                  // name="whenCovid"
                  readOnly
                  value={elem.had_covid_at}
                />
              </div>
            </div>
          )}

          <div className="section">
            <p>have you been vaccinated?</p>
            <div className="option">
              <input
                disabled
                type="radio"
                // id="covidDate"
                // name="whenCovid"
                readOnly
                checked={elem.vaccinated}
              />
              <p>yes</p>
            </div>
            <div className="option">
              <input
                disabled
                type="radio"
                // id="covidDate"
                // name="whenCovid"
                readOnly
                checked={!elem.vaccinated}
              />
              <p>no</p>
            </div>
          </div>

          {elem.vaccinated && (
            <div className="section">
              <p>When did you get your covid vaccine?</p>
              <div className="option">
                <input
                  disabled
                  type="date"
                  // id="covidDate"
                  // name="whenCovid"
                  readOnly
                  value={elem.vaccinated_at}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormModel;
