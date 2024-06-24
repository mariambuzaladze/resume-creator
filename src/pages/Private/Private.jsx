import Header from "./components/Header";
import GoBack from "../../shared-components/GoBack";
import Main from "./components/Main";

export default function Private() {
  return (
    <div className="flex bg-[#F9F9F9] h-screen p-4 gap-2">
      <GoBack />
      <div className="flex flex-col gap-4 w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}
