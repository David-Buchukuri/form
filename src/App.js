import "./styles/pages.css";
import "./styles/home.css";
import "./styles/submitted.css";
import Form from "./components/form";
import Applications from "./components/applications";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="*" element={<div>couldn't find this page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
