import { useContext, useEffect } from "react";
import { dataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import GoBack from "../../shared-components/GoBack";
import Resume from "../../shared-components/Resume";
import Sent from "./components/Sent";

export default function ResumeM() {
  const context = useContext(dataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const { general, experience, education } = context.data;

    if (
      !general ||
      !general.name ||
      !general.surname ||
      !general.image ||
      !general.email ||
      !general.number
    ) {
      navigate("/private");
    } else if (
      experience.some(
        (exp) =>
          !exp.position ||
          !exp.employer ||
          !exp.started_at ||
          !exp.ended_at ||
          !exp.description
      )
    ) {
      navigate("/experience");
    } else if (
      education.some(
        (edu) =>
          !edu.school || !edu.degree || !edu.graduation_date || !edu.description
      )
    ) {
      navigate("/education");
    }
  }, []);
  return (
    <main className="w-full flex justify-center pt-[54px] pb-[129px] relative bg-[#fff] dark:bg-[#141625] ">
      <div className="absolute top-[45px] left-[48px]">
        <GoBack />
      </div>
      <div className="min-h-[1080px] relative border-[0.8px] border-solid border-[#000] dark:border-[#fff]">
        <Resume />
        <div className="absolute top-0 right-[-52px] transform translate-x-full">
          <Sent />
        </div>
      </div>
    </main>
  );
}
