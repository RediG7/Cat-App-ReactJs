import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import "./App.css";

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

        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
