import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import About from "./Pages/about/about";
import Error from "./Pages/error/error";
import Findcard from "./Pages/lodgement/lodgement";

function App() {
  return (
    <div className="app__routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Lodgement/:id" element={<Findcard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
