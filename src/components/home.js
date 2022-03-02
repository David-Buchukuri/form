import { Link } from "react-router-dom";

const Home = ({ forward }) => {
  return (
    <div className="home-wrapper">
      <div>homepage</div>
      <button onClick={forward}>start questionnarie</button>
      <Link to="/applications">
        <button>go to all applications</button>
      </Link>
    </div>
  );
};

export default Home;
