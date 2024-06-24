import Header from "./components/Header";
import GoBack from "../../shared-components/GoBack";
import Main from "./components/Main";

export default function Private() {
  return (
    <div className="flex bg-[#F9F9F9] h-screen p-4 gap-2 md:gap-8">
      <GoBack />
      <div className="flex flex-col gap-4 w-full mr-6 md:gap-8">
        <Header />
        <Main />
      </div>
    </div>
  );
}
