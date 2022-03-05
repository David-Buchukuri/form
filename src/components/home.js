import { Link } from "react-router-dom";
import starsBg from "../images/starsBg.png";
import astronaut from "../images/astronaut.png";

const Home = ({ forward }) => {
  return (
    <div
      className="home-wrapper"
      style={{
        backgroundImage: `url(${starsBg})`,
        backgroundSize: "1920px 1080px",
      }}
    >
      <div className="h1Wrapper">
        <h1>Welcome Rocketeer !</h1>
      </div>

      <button className="start-btn" onClick={forward}>
        Start Questionnarie
      </button>

      <Link to="/applications">Submitted Applications</Link>

      <img className="astronaut" src={astronaut} alt="astronaut" />
    </div>
  );
};

export default Home;
