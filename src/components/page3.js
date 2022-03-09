import { useEffect } from "react";

const Page3 = ({
  workPreferance,
  setWorkPreferance,
  hadCovid,
  setHadCovid,
  vaccinated,
  setVaccinated,
  whenCovid,
  setWhenCovid,
  page,
  setNextDisabled,
  vaccineDate,
  setVaccineDate,
}) => {
  useEffect(() => {
    if (
      page === 3 &&
      workPreferance &&
      hadCovid !== null &&
      vaccinated !== null
    ) {
      if (
        hadCovid === true &&
        whenCovid !== "" &&
        vaccinated === true &&
        vaccineDate !== ""
      ) {
        setNextDisabled(false);
      } else if (hadCovid === false && vaccinated === false) {
        setNextDisabled(false);
      } else if (
        hadCovid === true &&
        whenCovid !== "" &&
        vaccinated === false &&
        vaccineDate === ""
      ) {
        setNextDisabled(false);
      } else if (
        hadCovid === false &&
        whenCovid === "" &&
        vaccinated === true &&
        vaccineDate !== ""
      ) {
        setNextDisabled(false);
      } else {
        setNextDisabled(true);
      }
    } else {
      setNextDisabled(true);
    }
  }, [workPreferance, hadCovid, vaccinated, whenCovid, vaccineDate]);

  return (
    <div className="page">
      <div className="questions-3">
        <h2>Covid Stuff</h2>
        <br />
        <div className="question-block">
          <p style={{ fontSize: "18px" }}>how would you prefer to work</p>
          <br />
          <div className="check-question">
            <input
              onChange={(e) => setWorkPreferance(e.target.value)}
              type="radio"
              id="office"
              name="workPreferance"
              value="from_office"
              checked={workPreferance === "from_office"}
            />
            <p>From Sairme Office</p>
          </div>

          <div className="check-question">
            <input
              onChange={(e) => setWorkPreferance(e.target.value)}
              type="radio"
              id="home"
              name="workPreferance"
              value="from_home"
              checked={workPreferance === "from_home"}
            />
            <p>From home</p>
          </div>

          <div className="check-question">
            <input
              onChange={(e) => setWorkPreferance(e.target.value)}
              type="radio"
              id="hybrid"
              name="workPreferance"
              value="hybrid"
              checked={workPreferance === "hybrid"}
            />
            <p>hybrid</p>
          </div>
        </div>

        <br />
        <br />

        {/* */}

        <div className="question-block">
          <p style={{ fontSize: "18px" }}>did you contact covid 19 :(</p>
          <br />
          <div className="check-question">
            <input
              onChange={() => setHadCovid(true)}
              type="radio"
              id="covidYes"
              name="covidStatus"
              checked={hadCovid === true}
            />
            <p>yes</p>
          </div>
          <div className="check-question">
            <input
              onChange={() => {
                setWhenCovid("");
                setHadCovid(false);
              }}
              type="radio"
              id="covidNo"
              name="covidStatus"
              checked={hadCovid === false}
            />
            <p>no</p>
          </div>
        </div>

        <br />
        <br />

        {hadCovid && (
          <div className="question-block date">
            <p>when?</p>
            <input
              placeholder="Date"
              onChange={(e) => setWhenCovid(e.target.value)}
              type="date"
              id="covidDate"
              name="whenCovid"
              value={whenCovid}
            />
          </div>
        )}
        {whenCovid === "" && hadCovid && <p>input date to continue</p>}
        <br />
        <div className="question-block">
          {/* <div> */}
          <p style={{ fontSize: "18px" }}>have you been vaccinated?</p>
          <br />
          <div className="check-question">
            <input
              onChange={() => setVaccinated(true)}
              type="radio"
              id="vaccinatedYes"
              name="vaccineStatus"
              //value={true}
              checked={vaccinated === true}
            />
            <p>yes</p>
          </div>

          <div className="check-question">
            <input
              onChange={() => {
                setVaccinated(false);
                setVaccineDate("");
              }}
              type="radio"
              id="vaccinatedNo"
              name="vaccineStatus"
              // value={false}
              checked={vaccinated === false}
            />
            <p>no</p>
          </div>

          {/* </div> */}
          <br />
          <br />
        </div>
        {vaccinated && (
          <div className="question-block date">
            {/* <div> */}
            <p style={{ fontSize: "18px" }}>
              when did you get your last covid vaccine?
            </p>
            <br />
            <input
              onChange={(e) => setVaccineDate(e.target.value)}
              type="date"
              id="covidVaccineDate"
              name="whenCovidVaccine"
              value={vaccineDate}
            />
          </div>
        )}
        {vaccineDate === "" && vaccinated && <p>input date to continue</p>}
      </div>
    </div>
  );
};

export default Page3;
