import GoBack from "../../shared-components/GoBack";
import Resume from "../../shared-components/Resume";
import Sent from "./components/Sent";

export default function ResumeM() {
  return (
    <main className="w-full flex justify-center pt-[54px] pb-[129px] relative">
      <div className="absolute top-[45px] left-[48px]">
        <GoBack />
      </div>
      <div className="min-h-[1080px] relative border-[0.8px] border-solid border-[#000]">
        <Resume />
        <div className="absolute top-0 right-[-52px] transform translate-x-full">
          <Sent />
        </div>
      </div>
    </main>
  );
}
