import Header from "./components/Header";
import Main from "./components/Main";
import Line from "../../shared-components/Line";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 pt-3 p-4 h-screen">
      <Header />
      <Line />
      <Main />
    </div>
  );
}
