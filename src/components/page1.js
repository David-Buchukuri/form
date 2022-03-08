import { useEffect } from "react";
// import { NextDisabledContext } from "../helper/context";
// const Page1 = ({ data, setData, setNextDisabled }) => {
const Page1 = ({
  firstName,
  setfirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  firstNameErr,
  setfirstNameErr,
  lastNameErr,
  setLastNameErr,
  emailErr,
  setEmailErr,
  phoneErr,
  setPhoneErr,
  setNextDisabled,
  // nextDisabled,
  page,
}) => {
  const firstLastNameCheck = (word, setter) => {
    // console.log(firstName);
    word = word.replace(/\s/g, "");
    if (!/[^a-zA-Z]/.test(word) && word.length >= 2) {
      setter(false);
    } else {
      setter(true);
    }
  };

  const handleName = (e) => {
    setfirstName(e.target.value);
    firstLastNameCheck(e.target.value, setfirstNameErr);
  };

  const handleSurname = (e) => {
    setLastName(e.target.value);
    firstLastNameCheck(e.target.value, setLastNameErr);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e.target.value
      )
    ) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  };

  const handlePhone = (e) => {
    setPhone(e.target.value.replace(/\s/g, ""));

    let value = e.target.value.substr(1, e.target.value.length - 1);

    value = value.replace(/\s/g, "");
    let isNum = /^\d+$/.test(value);

    if (
      isNum &&
      value.length === 12 &&
      e.target.value.substr(0, 5) === "+9955"
    ) {
      setPhoneErr(false);
    } else {
      setPhoneErr(true);
    }
  };

  useEffect(() => {
    // console.log(nextDisabled);
    if (
      firstNameErr === false &&
      lastNameErr === false &&
      emailErr === false &&
      phoneErr === false &&
      page === 1
    ) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [firstNameErr, lastNameErr, emailErr, phoneErr]);

  return (
    <div className="page">
      <div className="questions">
        <h2>
          hey, rocketeer, what <br /> are your coordinates
        </h2>
        <div className="input-container">
          <input
            placeholder="First Name"
            type="text"
            required
            value={firstName}
            onChange={handleName}
          />
          {firstNameErr && (
            <p>
              length of name should be at least 2 and contain only characters
            </p>
          )}

          <input
            placeholder="Last Name"
            type="text"
            required
            value={lastName}
            onChange={handleSurname}
          />
          {lastNameErr && (
            <p>
              length of last name should be at least 2 and contain only
              characters
            </p>
          )}

          <input
            placeholder="Email"
            type="text"
            required
            value={email}
            onChange={handleEmail}
          />
          {emailErr && <p>provide valid email</p>}

          <input
            placeholder="+995 5 _ _ _ _"
            type="text"
            value={phone}
            onChange={handlePhone}
          />
          {phoneErr && (
            <p>number must start with +9955 and contain 12 digits</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page1;
