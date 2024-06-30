import { Link } from "react-router-dom";
import Educate from "./components/Educate";
import GoBack from "../../shared-components/GoBack";
import Resume from "../../shared-components/Resume";

function Education() {
  return (
    <main className="bg-[#f9f9f9] min-h-svh relative dark:bg-[#141625]">
      <div className="absolute top-[45px] left-[48px]">
        <GoBack />
      </div>
      <section className="min-h-svh flex flex-col xl:flex-row pb-20 xl:pb-0">
        <div className="px-[150px] pt-[47px] pb-[65px]">
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
        <Resume />
        <div className="flex xl:hidden items-center justify-between mt-[200px] px-10 xl:px-0">
          <button
            onClick={() => navigate("/experience")}
            className="w-[113px] h-12 flex items-center justify-center rounded-[4px] bg-[#512faf] hover:bg-[#7949ff] text-base text-[#fff] font-[500] leading-[20px] tracking-[1.28px] "
          >
            ᲣᲙᲐᲜ
          </button>
          <button
            type="submit"
            className="w-[151px] h-12 flex items-center justify-center rounded-[4px] bg-[#512faf] hover:bg-[#7949ff] text-base text-[#fff] font-[500] leading-[20px] tracking-[1.28px] "
          >
            დასრულება
          </button>
        </div>
      </section>
    </main>
  );
}

export default Education;
