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
      {/* {console.log("work Pref state:", workPreferance)}
      {console.log("had covid state:", hadCovid)}
      {console.log("vaccinated:", vaccinated)}
      {console.log("when Covid:", whenCovid)} */}
      <h2>page3</h2>
      <br />

      {/* shinzo wo sasageo  */}
      <div className="question-block">
        <p>how would you prefer to work</p>
        <br />
        <div>
          <p>From Sairme Office</p>
          <input
            onChange={(e) => setWorkPreferance(e.target.value)}
            type="radio"
            id="office"
            name="workPreferance"
            value="from_office"
            checked={workPreferance === "from_office"}
          />
        </div>

        <div>
          <p>From home</p>
          <input
            onChange={(e) => setWorkPreferance(e.target.value)}
            type="radio"
            id="home"
            name="workPreferance"
            value="from_home"
            checked={workPreferance === "from_home"}
          />
        </div>

        <div>
          <p>hybrid</p>
          <input
            onChange={(e) => setWorkPreferance(e.target.value)}
            type="radio"
            id="hybrid"
            name="workPreferance"
            value="hybrid"
            checked={workPreferance === "hybrid"}
          />
        </div>
      </div>

      <br />
      <br />

      {/* */}
      <div className="question-block">
        <p>did you contact covid 19 :(</p>
        <br />
        <div>
          <p>yes</p>
          <input
            onChange={() => setHadCovid(true)}
            type="radio"
            id="covidYes"
            name="covidStatus"
            checked={hadCovid === true}
          />
        </div>
        <div>
          <p>no</p>
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
        </div>
      </div>

      <br />
      <br />
      {hadCovid && (
        <div className="question-block">
          <p>when</p>
          <br />
          <input
            onChange={(e) => setWhenCovid(e.target.value)}
            type="date"
            id="covidDate"
            name="whenCovid"
            value={whenCovid}
          />
        </div>
      )}
      {whenCovid === "" && hadCovid && <p>input date to continue</p>}

      <div className="question-block">
        {/* <div> */}
        <p>have you been vaccinated?</p>
        <br />
        <div>
          <p>yes</p>
          <input
            onChange={() => setVaccinated(true)}
            type="radio"
            id="vaccinatedYes"
            name="vaccineStatus"
            //value={true}
            checked={vaccinated === true}
          />
        </div>
        <div>
          <p>no</p>
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
        </div>
        {/* </div> */}
      </div>
      {vaccinated && (
        <div className="question-block">
          {/* <div> */}
          <p>when did you get your last covid vaccine?</p>
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
  );
};

export default Page3;
