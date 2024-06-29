import "./App.css";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Private from "./pages/Private/Private";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Resume from "./pages/Resume/Resume";

export const dataContext = createContext({});

function App() {
  const resumes = [];
  const storedData = JSON.parse(localStorage.getItem("data")) || {
    general: {},
    experience: [
      {
        position: "",
        employer: "",
        started_at: "",
        ended_at: "",
        description: "",
      },
    ],
    education: [],
  };
  const [data, setData] = useState(storedData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = JSON.parse(localStorage.getItem("darkMode"));
    return storedMode || false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <dataContext.Provider value={{ data, setData, darkMode, setDarkMode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private" element={<Private />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
