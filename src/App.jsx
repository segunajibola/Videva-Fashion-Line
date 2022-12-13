import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
      const [darkMode, setDarkMode] = useState(false);
      const handleMode = () => {
        setDarkMode(!darkMode);
      };

  return (
    <>
    <Router>
      <Navbar darkMode={darkMode} handleMode={handleMode} />
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
    </Router>
      
    </>
  );
}

export default App;
