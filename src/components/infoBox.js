import { useState, useEffect } from "react";

const InfoBox = ({ page }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    switch (page) {
      case 2:
        setTitle("A bit about our battles");
        setBody(
          `As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.`
        );
        break;
      case 3:
        setTitle("Redberry Covid Politics");
        setBody(
          `As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales.`
        );
        break;
      case 4:
        setTitle("Redberrian Insights");
        setBody(
          `We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!`
        );
        break;
      default:
        setTitle("Redberry origins");
        setBody(
          `You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇`
        );
    }
  });
  return (
    <div>
      {page >= 1 && page <= 4 && (
        <div className="aboutInfo">
          <h2 className="right-title">{title}</h2>
          <div className="paragraph-wrapper">
            <p className="right-paragraph">{body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
