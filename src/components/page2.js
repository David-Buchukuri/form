import { useEffect } from "react";

const Page2 = ({
  skills,
  setSkills,
  selectedSkills,
  setSelectedSkills,
  curSelected,
  setCurSelected,
  currentSkills,
  setCurrentSkills,
  years,
  setYears,
  yearErr,
  setYearErr,
  // nextDisabled,
  setNextDisabled,
  page,
}) => {
  useEffect(() => {
    if (!skills) {
      fetch("https://bootcamp-2022.devtest.ge/api/skills")
        .then((res) => {
          if (!res.ok) throw new Error("something went wrong, try again later");
          return res.json();
        })
        .then((res) => {
          setSkills(res);
          setCurrentSkills(res);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  const handleAddSkill = () => {
    let filtered = currentSkills.filter(
      (elem) => elem.id !== Number(curSelected)
    );
    setCurrentSkills(filtered);
    let skillObject = skills.filter((elem) => elem.id === Number(curSelected));
    skillObject[0].experience = years;
    setSelectedSkills([...selectedSkills, skillObject[0]]);

    setCurSelected(null);
    setYears(1);
  };

  const handleRemove = (idx) => {
    // console.log(currentSkills, selectedSkills[idx]);
    let arr = [...selectedSkills];
    let removed = arr.splice(idx, 1);
    setCurrentSkills([...currentSkills, removed[0]]);
    // console.log([...currentSkills, removed]);

    setSelectedSkills(arr);
  };

  useEffect(() => {
    if (selectedSkills[0] && page === 2) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [selectedSkills, page]);

  return (
    <div className="page">
      <div className="questions">
        <h2>Tell us about your skills</h2>
        <select
          className="select"
          onChange={(e) => setCurSelected(e.target.value)}
        >
          <option value="" defaultValue hidden>
            skills
          </option>
          {currentSkills &&
            currentSkills.map((elem) => (
              <option key={elem.id} value={elem.id}>
                {elem.title}
              </option>
            ))}
        </select>
        <input
          className="exp-years"
          placeholder="experience duration in years"
          value={years}
          type="number"
          onChange={(e) => {
            if (
              Number(e.target.value) < 1 ||
              Number(e.target.value) > 80 ||
              e.target.value === "" ||
              Number(e.target.value[0]) === 0
            ) {
              setYearErr(true);
            } else {
              setYearErr(false);
            }
            setYears(e.target.value);
          }}
        />
        {yearErr && <p>experience must be from 1 to 80</p>}{" "}
        <div className="add-btn-parent">
          <button
            style={{ opacity: yearErr ? "0.4" : "1" }}
            onClick={handleAddSkill}
            disabled={!(curSelected !== null && yearErr === false)}
          >
            Add Programming Language
          </button>
        </div>
        <div>
          {/* {console.log(selectedSkills)} */}
          {selectedSkills.map((elem, idx) => (
            <div className="added-skill-box" key={elem.id}>
              <p className="hey">{elem.title}</p>
              <p>Years of experience: {elem.experience}</p>
              <button
                onClick={() => {
                  handleRemove(idx);
                }}
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
