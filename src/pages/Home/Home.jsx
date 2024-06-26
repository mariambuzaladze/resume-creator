import Header from "./components/Header";
import Main from "./components/Main";
import Line from "../../shared-components/Line";
import BackgroundImg from "/background.png";

export default function Home() {
  return (
    <div
      className="flex flex-col gap-4 pt-3 p-4 h-screen"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <Line />
      <Main />
    </div>
  );
}
