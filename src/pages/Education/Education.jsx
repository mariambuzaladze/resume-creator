import { Link } from "react-router-dom";
import Educate from "./components/Educate";

function Education() {
  return (
    <main className="bg-[#f9f9f9] min-h-svh">
      <section className="min-h-svh flex flex-col justify-between px-[150px] pt-[47px] pb-[65px]">
        <div>
          <header className="flex justify-between items-center pb-[11px] border-b-[2px] border-solid border-[#1a1a1a]">
            <h1 className="text-2xl text-[#1a1a1a] font-[700]">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h1>
            <span className="text-xl text-[#1a1a1a] font-[500]">3/3</span>
          </header>
          <Educate />
          <button className="w-[289px] h-[48px] flex items-center justify-center rounded-[4px] bg-[#62a1eb] text-base text-[#fff] font-[400] leading-[20px] mt-[45px]">
            სხვა სასწავლებლის დამატება
          </button>
        </div>
        <div className="flex items-center justify-between mt-[200px]">
          <button className="w-[113px] h-12 flex items-center justify-center rounded-[4px] bg-[#6b40e3] text-base text-[#fff] font-[500] leading-[20px] tracking-[1.28px] ">
            ᲣᲙᲐᲜ
          </button>
          <Link to={"/resume"}>
            <button className="w-[151px] h-12 flex items-center justify-center rounded-[4px] bg-[#6b40e3] text-base text-[#fff] font-[500] leading-[20px] tracking-[1.28px] ">
              დასრულება
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Education;
