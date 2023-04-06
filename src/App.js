import { Routes, Route } from "react-router-dom";
import GearTrains from "./Components/GearTrains";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Details from "./Components/Details";

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="/" element={<GearTrains />} />
        <Route path="/details" element={<Details />} />
        <Route path= "/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
