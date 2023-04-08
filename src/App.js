import { Routes, Route, BrowserRouter } from "react-router-dom";
import GearTrains from "./Components/GearTrains";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Details from "./Components/Details";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter basename="/gear_train">
          <Routes>
            <Route path="/" element={<GearTrains />} />
            <Route path="/details" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
