// import { useState, useEffect, useContext } from "react";
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
}) => {
  // // // // const [nameErr, setnameErr] = useState(null);
  // // // // const { nextDisabled, setNextDisabled } = useContext(NextDisabledContext);
  // // // // const [lastNameErr, setlastNameErr] = useState(null);
  // // // // const [emailErr, setEmailErr] = useState(null);
  // // // // const [phoneErr, setPhoneErr] = useState(null);

  const firstLastNameCheck = (word, setter) => {
    console.log(firstName);
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

    if (isNum && value.length === 9 && e.target.value.substr(0, 4) === "+995") {
      setPhoneErr(false);
    } else {
      setPhoneErr(true);
    }
  };

  // //// useEffect(() => {
  // ////   if (
  // ////     (nameErr === false &&
  // ////       lastNameErr === false &&
  // ////       emailErr === false &&
  // ////       phoneErr === false) ||
  // ////     data.page1Valid
  // ////   ) {
  // ////     console.log("if");
  // ////     setData({ ...data, page1Valid: true });
  // ////   } else {
  // // //      console.log("else");
  // // //    setData({ ...data, page1Valid: false });
  // // //   }
  // // //  }, [nameErr, lastNameErr, emailErr, phoneErr]);

  return (
    <div className="page">
      {/* {console.log(phoneErr)} */}
      <h2>page1 title</h2>
      <input
        placeholder="first name"
        type="text"
        required
        value={firstName}
        onChange={handleName}
      />
      {firstNameErr && (
        <p>
          length of name should be greater than 2 and contain only characters
        </p>
      )}
      <input
        placeholder="last name"
        type="text"
        required
        value={lastName}
        onChange={handleSurname}
      />
      {lastNameErr && (
        <p>
          length of last name should be greater than 2 and contain only
          characters
        </p>
      )}

      <input
        placeholder="email"
        type="text"
        required
        value={email}
        onChange={handleEmail}
      />
      {emailErr && <p>provide valid email</p>}

      <input
        placeholder="phone number"
        type="text"
        value={phone}
        onChange={handlePhone}
      />
      {phoneErr && <p>number must start with +995 and contain 9 digits</p>}
    </div>
  );
};

export default Page1;
