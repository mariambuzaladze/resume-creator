import { Link } from "react-router-dom";
import Educate from "./components/Educate";
import GoBack from "../../shared-components/GoBack";

function Education() {
  return (
    <main className="bg-[#f9f9f9] min-h-svh relative dark:bg-[#141625]">
      <div className="absolute top-[45px] left-[48px]">
        <GoBack />
      </div>
      <section className="min-h-svh flex flex-col justify-between px-[150px] pt-[47px] pb-[65px]">
        <div>
          <header className="flex justify-between items-center pb-[11px] border-b-[2px] border-solid border-[#1a1a1a] dark:border-white">
            <h1 className="text-2xl text-[#1a1a1a] font-[700] dark:text-white">
              ᲒᲐᲜᲐᲗᲚᲔᲑᲐ
            </h1>
            <span className="text-xl text-[#1a1a1a] font-[500] dark:text-white">
              3/3
            </span>
          </header>
          <Educate />
        </div>
      </section>
    </main>
  );
}

export default Education;
