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
      {console.log("attand talk", devTalkAttend)}
      {console.log("text", devTalkText)}
      {console.log("special", special)}
      <h2>page4</h2>
      <div className="question-block">
        <p>Would you attand Devtalks and maybe also organize your own?</p>
        <br />
        <div>
          <p>yes</p>
          <input
            onChange={() => setDevTalkAttend(true)}
            type="radio"
            id="DevTalkYes"
            name="DevTalk"
            checked={devTalkAttend}
          />
        </div>
        <div>
          <p>no</p>
          <input
            onChange={() => {
              setDevTalkAttend(false);
              setDevTalkText("");
            }}
            type="radio"
            id="DevTalkno"
            name="DevTalk"
            checked={devTalkAttend === false}
          />
        </div>
      </div>
      <br />
      {devTalkAttend && (
        <div className="question-block">
          <p>what would you speak about at Devtalk</p>
          <div className="textarea-wrapper">
            <textarea
              placeholder="I would.."
              onChange={(e) => {
                setDevTalkText(e.target.value);
              }}
              value={devTalkText}
            ></textarea>
          </div>
        </div>
      )}
      {devTalkAttend && devTalkText === "" && (
        <p>write some text to continue</p>
      )}
      <br />
      <div className="question-block">
        <p>Tell us something special</p>
        <div className="textarea-wrapper">
          <textarea
            placeholder="I am spec.."
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
