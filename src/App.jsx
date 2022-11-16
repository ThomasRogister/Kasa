import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Error from "./pages/error/error";
import Findcard from "./pages/lodgement/lodgement";

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
