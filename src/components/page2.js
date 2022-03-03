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
  // setPage
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
    setYears(0);
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
      {/* {console.log("selected skills", selectedSkills)} */}
      <h2>page2</h2>
      <select onChange={(e) => setCurSelected(e.target.value)}>
        <option value="" defaultValue hidden>
          Select your option
        </option>
        {currentSkills &&
          currentSkills.map((elem) => (
            <option key={elem.id} value={elem.id}>
              {elem.title}
            </option>
          ))}
      </select>
      <input
        placeholder="experience duration in years"
        value={years}
        type="number"
        onChange={(e) => {
          if (
            Number(e.target.value) < 0 ||
            Number(e.target.value) > 80 ||
            e.target.value === ""
          ) {
            setYearErr(true);
          } else {
            setYearErr(false);
          }
          setYears(e.target.value);
        }}
      />
      {yearErr && <p>experience must be from 0 to 80</p>}{" "}
      {/* {console.log("currrentselected", curSelected)} */}
      <button
        onClick={handleAddSkill}
        disabled={!(curSelected !== null && yearErr === false)}
      >
        add skill
      </button>
      <div>
        {/* {console.log("selected", selectedSkills)} */}
        {selectedSkills.map((elem, idx) => (
          <div key={elem.id}>
            {elem.title}
            <button
              onClick={() => {
                handleRemove(idx);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
