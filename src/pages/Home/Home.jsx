import { Link } from "react-router-dom";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <div className="w-screen h-[1px] bg-[#1A1A1A]"></div>
      <Link to={"/private"}>
        <button>რეზიუმეს დამატება</button>
      </Link>
    </div>
  );
}
