import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import ParticularService from "./components/ParticularService";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import services from "./data/services.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`overflow-hidden ${darkMode ? "dark" : ""}`} id="dark">
      <Router>
        <Navbar handleMode={handleMode} darkMode={darkMode} />
        {/* <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route
          path='/services/:service'
          element={<ParticularService services={services} />}
        />

          <Route path="/courses" element={<Courses />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes> */}
        <Footer />
      </Router>
    </div>
  );
}
export default App;
