import { useEffect, useState } from "react";

const Submit = ({
  back,
  firstName,
  lastName,
  email,
  phone,
  workPreferance,
  hadCovid,
  whenCovid,
  vaccinated,
  vaccineDate,
  devTalkAttend,
  devTalkText,
  special,
  selectedSkills,
}) => {
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = () => {
    setIsPending(true);
    const jsonObj = {
      token: "9e75b10b-2115-45ef-bf9a-1f3de4bbb4b7",
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      skills: selectedSkills.map((elem) => {
        return { id: elem.id, experience: Number(elem.experience) };
      }),
      work_preference: workPreferance,
      had_covid: hadCovid,
      // had_covid_at: whenCovid,
      vaccinated: vaccinated,
      // vaccinated_at: vaccineDate,
      will_organize_devtalk: devTalkAttend,
      // devtalk_topic: devTalkText,
      something_special: special,
    };

    if (whenCovid) {
      jsonObj.had_covid_at = whenCovid;
    }

    if (vaccineDate) {
      jsonObj.vaccinated_at = vaccineDate;
    }

    if (devTalkText) {
      jsonObj.devtalk_topic = devTalkText;
    }

    console.log(jsonObj);
    fetch("https://bootcamp-2022.devtest.ge/api/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonObj),
    })
      .then((res) => {
        if (res.status) {
          console.log(res);
          setSuccess(true);
        } else {
          throw new Error("something went wrong");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsPending(false);
        setSuccess(false);
      });
  };

  const afterSubmit = () => {
    if (success === false) {
      return <h2>somenthing went wrong 😐 try again later</h2>;
    } else {
      return <h2>thanks for joining 😃</h2>;
    }
  };

  useEffect(() => {
    if (success || success === false) {
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
  }, [success]);

  return (
    <div className="submit-page">
      {success === null && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            style={{
              width: "395px",
              height: "79px",
              backgroundColor: "#FE3B1F",
              borderRadius: "50px",
              border: "none",
              color: "white",
              fontSize: "36px",
              cursor: "pointer",
            }}
            disabled={isPending}
            onClick={handleSubmit}
          >
            {isPending ? "sending..." : "submit"}
          </button>

          <button
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "28px",
              marginTop: "35px",
              cursor: "pointer",
            }}
            disabled={isPending}
            onClick={back}
          >
            go back
          </button>
        </div>
      )}
      {(success === true || success === false) && afterSubmit()}
    </div>
  );
};

export default Submit;
