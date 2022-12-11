// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const handleMode = () => {
//     setDarkMode(!darkMode);
//   };

  return (
    <div className={`overflow-hidden`} id="dark">
      <Router>
        <Navbar />
        {/* <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route
          path='/services/:service'
          element={<ParticularService services={services} />}
        />

          <Route path="/courses" element={<Courses />} />

          {/* <Route path="*" element={<NotFound />} />
        </Routes> */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
export default App;
