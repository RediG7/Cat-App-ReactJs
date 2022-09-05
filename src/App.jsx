import useLocalStorage from "use-local-storage";

import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import "./App.css";
import BreedScreen from "./screens/BreedScreen";
import FactsScreen from "./screens/FactsScreen";
import RandomScreen from "./screens/RandomScreen";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <BrowserRouter>
      <>
        <div className="App" data-theme={theme}>
          <div
            style={{
              position: "fixed",
              top: "23px",
              right: "33px",
              cursor: "pointer",
            }}
            onClick={switchTheme}
          >
            {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </div>

          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/breeds" element={<BreedScreen />} />
            <Route path="/facts" element={<FactsScreen />} />
            <Route path="/random" element={<RandomScreen />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
