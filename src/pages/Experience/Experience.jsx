import { Link } from "react-router-dom";
import Header from "./components/Header";
import GoBack from "../../shared-components/GoBack";
import Main from "./components/Main";

export default function Experience() {
  return (
    <div className="flex bg-[#F9F9F9] min-h-screen p-4 gap-2 md:gap-8 dark:bg-[#141625]">
      <GoBack />

      <div className="flex flex-col gap-4 w-full mr-6 md:gap-8">
        <Header />
        <Main />
      </div>
    </div>
  );
}
