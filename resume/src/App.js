import "./App.css";
import CV from "./pages/MainCV";
import DevOpsCV from "./pages/DevOpsCV"
import { Routes, Route, HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CV />} />
          <Route exact path="/devops" element={<DevOpsCV />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
