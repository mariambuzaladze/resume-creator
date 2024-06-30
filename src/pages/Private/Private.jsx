import Header from "./components/Header";
import GoBack from "../../shared-components/GoBack";
import Main from "./components/Main";
import Resume from "../../shared-components/Resume";

export default function Private() {
  return (
    <div className="flex bg-[#F9F9F9] min-h-screen gap-2 md:gap-8 dark:bg-[#141625] relative">
      <div className="absolute top-[45px] left-[48px]">
        <GoBack />
      </div>
      <div className="flex justify-between">
        <div
          className="flex flex-col gap-4 w-full md:gap-8 px-[150px] pt-[47px]"
          style={{ maxWidth: "50%" }}
        >
          <Header />
          <Main />
        </div>
        <Resume />
      </div>
    </div>
  );
}
