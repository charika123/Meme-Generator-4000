import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu"
import GenerateMeme from "./components/GenerateMeme";
import APIMemes from "./components/ViewMemes"

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path="/generatememes" element={<GenerateMeme/>}/>
      <Route path="/viewmemes" element={<APIMemes/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
