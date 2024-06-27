import Logo from "/redberry logo.png";
import Moon from "/icon-moon.svg";
import Sun from "/icon-sun.svg";
import { useContext } from "react";
import { dataContext } from "../../../App";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(dataContext);
  return (
    <header className="flex justify-between items-center">
      <img src={Logo} alt="redberry logo" />
      <img
        src={darkMode ? Sun : Moon}
        alt="theme icon"
        className="cursor-pointer"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      />
    </header>
  );
}
