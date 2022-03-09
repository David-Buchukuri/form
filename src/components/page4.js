import { useEffect } from "react";

const Page4 = ({
  devTalkAttend,
  setDevTalkAttend,
  devTalkText,
  setDevTalkText,
  special,
  setSpecial,
  page,
  setNextDisabled,
}) => {
  useEffect(() => {
    if (devTalkAttend === false && special) {
      setNextDisabled(false);
    } else if (devTalkAttend && special && devTalkText) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [devTalkAttend, devTalkText, special]);

  return (
    <div>
      <h2>What about you?</h2>
      <div style={{ marginTop: "150px" }} className="question-block">
        <p style={{ fontSize: "18px" }}>
          Would you attand Devtalks and maybe also organize your own?
        </p>
        <br />
        <div>
          <input
            style={{ width: "40px" }}
            onChange={() => setDevTalkAttend(true)}
            type="radio"
            id="DevTalkYes"
            name="DevTalk"
            checked={devTalkAttend}
          />
          <p>yes</p>
        </div>
        <div>
          <input
            style={{ width: "40px" }}
            onChange={() => {
              setDevTalkAttend(false);
              setDevTalkText("");
            }}
            type="radio"
            id="DevTalkno"
            name="DevTalk"
            checked={devTalkAttend === false}
          />
          <p>no</p>
        </div>
      </div>

      {devTalkAttend && (
        <div style={{ marginTop: "45px" }} className="question-block">
          <p style={{ fontSize: "18px" }}>
            what would you speak about at Devtalk?
          </p>

          <textarea
            style={{ width: "535px", height: "122px" }}
            placeholder="I would.."
            onChange={(e) => {
              setDevTalkText(e.target.value);
            }}
            value={devTalkText}
          ></textarea>
        </div>
      )}
      {devTalkAttend && devTalkText === "" && (
        <p>write some text to continue</p>
      )}
      <br />
      <div className="question-block">
        <p style={{ fontSize: "18px" }}>Tell us something special</p>
        <div className="textarea-wrapper">
          <textarea
            style={{ width: "535px", height: "89px" }}
            placeholder="I.."
            onChange={(e) => {
              setSpecial(e.target.value);
            }}
            value={special}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Page4;
