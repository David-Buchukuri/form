import "./App.css";
import Form from "./components/form";
// import Home from "./components/home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/form" element={<FormContainer />} />

    //       <Route path="*" element={<div>couldn't find this page</div>} />
    //     </Routes>
    //   </div>
    // </Router>
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
