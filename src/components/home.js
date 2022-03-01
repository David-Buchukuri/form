// import { Link } from "react-router-dom";

const Home = ({ forward }) => {
  return (
    <div>
      <div>home</div>
      {/* <Link to="/form" onClick={handleNext}> 
        go to form
      </Link>*/}
      <button onClick={forward}>start questionnarie</button>
    </div>
  );
};

export default Home;
