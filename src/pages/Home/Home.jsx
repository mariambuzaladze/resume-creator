import Header from "./components/Header";
import Main from "./components/Main";
import Line from "../../shared-components/Line";
import BackgroundImg from "/background.png";
import { dataContext } from "../../App";
import { useContext } from "react";

export default function Home() {
  const { darkMode } = useContext(dataContext);

  return (
    <div
      className={`flex flex-col gap-4 pt-3 p-4 h-screen bg-cover bg-no-repeat dark:bg-[#141625]`}
      style={{
        backgroundImage: darkMode ? "none" : `url(${BackgroundImg})`,
      }}
    >
      <Header />
      <Line />
      <Main />
    </div>
  );
}
