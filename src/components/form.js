import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Home from "./home";
import InfoBox from "./infoBox";
import Submit from "./submit";

import { useState, useEffect } from "react";
const Form = () => {
  const [page, setPage] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstNameErr, setfirstNameErr] = useState(null);
  const [lastNameErr, setLastNameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [phoneErr, setPhoneErr] = useState(null);
  const [yearErr, setYearErr] = useState(null);
  //
  const [skills, setSkills] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [currentSkills, setCurrentSkills] = useState([]);
  const [curSelected, setCurSelected] = useState(null);
  const [years, setYears] = useState("");
  //
  const [workPreferance, setWorkPreferance] = useState(null);
  const [hadCovid, setHadCovid] = useState(null);
  const [whenCovid, setWhenCovid] = useState("");
  const [vaccinated, setVaccinated] = useState(null);
  const [vaccineDate, setVaccineDate] = useState("");
  //
  const [devTalkAttend, setDevTalkAttend] = useState("");
  const [devTalkText, setDevTalkText] = useState("");
  const [special, setSpecial] = useState("");

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
          return (
            <Page1
              nextDisabled={nextDisabled}
              setNextDisabled={setNextDisabled}
              firstName={firstName}
              setfirstName={setfirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              firstNameErr={firstNameErr}
              setfirstNameErr={setfirstNameErr}
              lastNameErr={lastNameErr}
              setLastNameErr={setLastNameErr}
              emailErr={emailErr}
              setEmailErr={setEmailErr}
              phoneErr={phoneErr}
              setPhoneErr={setPhoneErr}
              page={page}
            />
          );
        case 2:
          return (
            <Page2
              skills={skills}
              setSkills={setSkills}
              selectedSkills={selectedSkills}
              setSelectedSkills={setSelectedSkills}
              curSelected={curSelected}
              setCurSelected={setCurSelected}
              currentSkills={currentSkills}
              setCurrentSkills={setCurrentSkills}
              years={years}
              setYears={setYears}
              yearErr={yearErr}
              setYearErr={setYearErr}
              nextDisabled={nextDisabled}
              setNextDisabled={setNextDisabled}
              page={page}
            />
          );
        case 3:
          return (
            <Page3
              setWorkPreferance={setWorkPreferance}
              workPreferance={workPreferance}
              hadCovid={hadCovid}
              setHadCovid={setHadCovid}
              vaccinated={vaccinated}
              setVaccinated={setVaccinated}
              whenCovid={whenCovid}
              setWhenCovid={setWhenCovid}
              page={page}
              setNextDisabled={setNextDisabled}
              vaccineDate={vaccineDate}
              setVaccineDate={setVaccineDate}
            />
          );
        case 4:
          return (
            <Page4
              devTalkAttend={devTalkAttend}
              setDevTalkAttend={setDevTalkAttend}
              devTalkText={devTalkText}
              setDevTalkText={setDevTalkText}
              special={special}
              setSpecial={setSpecial}
              page={page}
              setNextDisabled={setNextDisabled}
            />
          );
        case 5:
          return (
            <Submit
              back={handleBack}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
              workPreferance={workPreferance}
              hadCovid={hadCovid}
              whenCovid={whenCovid}
              selectedSkills={selectedSkills}
              vaccinated={vaccinated}
              vaccineDate={vaccineDate}
              devTalkAttend={devTalkAttend}
              devTalkText={devTalkText}
              special={special}
            />
          );
        default:
          return <Home forward={handleNext} />;
      }
    }
  };

  // useEffect(() => {
  //   if (
  //     firstNameErr === false &&
  //     lastNameErr === false &&
  //     emailErr === false &&
  //     phoneErr === false &&
  //     page === 1
  //   ) {
  //     setNextDisabled(false);
  //   } else {
  //     setNextDisabled(true);
  //   }
  // }, [firstNameErr, lastNameErr, emailErr, phoneErr]);
  return (
    <div className="parent">
      <div className="footer-page-wrapper">
        <div className="page">{displayPage()}</div>
        {page >= 1 && page <= 4 && (
          <div className="footer">
            <button className="arrow" onClick={handleBack}>
              {"<"}
            </button>

            {[...Array(5).keys()].map((elem) => {
              return (
                <button
                  value={elem}
                  style={{
                    backgroundColor: "#FE3B1F",
                    opacity: page - 1 >= elem ? "1" : "0.1",
                    borderRadius: "45px",
                    width: "19px",
                    height: "19px",
                    border: "none",
                    cursor: page - 1 >= elem ? "pointer" : "default",
                  }}
                  onClick={(e) => setPage(Number(e.target.value) + 1)}
                  disabled={page - 1 >= elem ? false : true}
                  key={elem}
                />
              );
            })}

            <button
              className="arrow"
              disabled={nextDisabled}
              onClick={handleNext}
              style={{ opacity: nextDisabled ? "0.4" : "1" }}
            >
              {">"}
            </button>
          </div>
        )}
      </div>
      <InfoBox page={page} />
    </div>
  );
};

export default Form;
