import { dataContext } from "../App";
import { useContext } from "react";

function Resume() {
  const context = useContext(dataContext);

  return (
    <main className="w-[822px] bg-[#fff] flex flex-col justify-between px-20 py-[44px]">
      <div className="flex flex-col gap-6">
        <section className="flex justify-between pb-[18px] border-b border-solid border-[#c8c8c8]">
          <aside className="flex flex-col gap-[34px] mt-6">
            <div className="flex flex-col gap-[17px]">
              <p className="max-w-[400px] h-[42px] flex items-center gap-5 text-[34px] text-[#f93b1d] font-[700] leading-[42px]">
                {context.data.general.name ? context.data.general.name : ""}
                <span>
                  {context.data.general.surname
                    ? context.data.general.surname
                    : ""}
                </span>
              </p>
              <div className="flex flex-col gap-[10px]">
                <div className="h-[21px] flex items-center gap-[10px]">
                  <img
                    src="/email.png"
                    alt="email"
                    className={`${
                      context.data.general.email ? "flex" : "hidden"
                    } w-5 h-5`}
                  />
                  <span className="max-w-[300px] text-lg text-[#1a1a1a] font-[400] leading-[21px]">
                    {context.data.general.email
                      ? context.data.general.email
                      : ""}
                  </span>
                </div>
                <div className="h-[21px] flex items-center gap-[10px]">
                  <img
                    src="/phone.png"
                    alt="phone"
                    className={`${
                      context.data.general.number ? "flex" : "hidden"
                    } w-5 h-5`}
                  />
                  <span className="max-w-[300px] text-lg text-[#1a1a1a] font-[400] leading-[21px]">
                    {context.data.general.number
                      ? context.data.general.number
                      : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2
                className={`${
                  context.data.general.aboutMe ? "flex" : "hidden"
                } h-[22px] text-lg text-[#f93b1d] font-[700] leading-[22px]`}
              >
                ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
              </h2>
              <p className="max-w-[432px] text-base text-[#000] font-[400] leading-[1.38]">
                {context.data.general.aboutMe
                  ? context.data.general.aboutMe
                  : ""}
              </p>
            </div>
          </aside>
          <img
            src={context.data.general.image}
            alt="avatar"
            className={`${
              context.data.general.image ? "flex" : "hidden"
            } w-[246] h-[246px] rounded-[133px]`}
          />
        </section>
        <section>
          <h2>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
          {context.data.experience.map((e, index) => {
            return (
              <div key={index}>
                <p>
                  {e.position ? e.position : ""}{" "}
                  <span>{e.employer ? `, ${e.employer}` : ""}</span>
                </p>
                <p>
                  <span>{e.started_at ? e.started_at : ""}</span>
                  <span>{e.started_at || e.ended_at ? " - " : ""}</span>
                  <span>{e.ended_at ? e.ended_at : ""}</span>
                </p>
                <p>{e.description ? e.description : ""}</p>
              </div>
            );
          })}
        </section>
      </div>
      <img
        src="/redberryMiniLogo.png"
        alt="logo"
        className="w-[42px] h-[42px]"
      />
    </main>
  );
}

export default Resume;
