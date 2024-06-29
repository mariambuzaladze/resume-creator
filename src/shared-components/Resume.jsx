import { dataContext } from "../App";
import { useContext } from "react";

function Resume() {
  const context = useContext(dataContext);

  return (
    <main className="w-[822px] bg-[#fff] flex flex-col justify-between px-20 py-[44px]">
      <section className="flex justify-between pb-[18px] border-b border-solid border-[#c8c8c8]">
        <aside className="flex flex-col gap-[34px] mt-6">
          <div className="flex flex-col gap-[17px]">
            <p className="text-[34px] text-[#f93b1d] font-[700] leading-[42px]">
              {context.data.general.name ? context.data.general.name : ""}
              <span>
                {context.data.general.surname
                  ? context.data.general.surname
                  : ""}
              </span>
            </p>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[10px]">
                <img
                  src={context.data.general.email ? "/email.png" : ""}
                  alt="email"
                  className="w-5 h-5"
                />
                <span className="text-lg text-[#1a1a1a] font-[400] leading-[21px]">
                  {context.data.general.email ? context.data.general.email : ""}
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <img
                  src={context.data.general.number ? "/phone.png" : ""}
                  alt="phone"
                  className="w-5 h-5"
                />
                <span className="text-lg text-[#1a1a1a] font-[400] leading-[21px]">
                  {context.data.general.number
                    ? context.data.general.number
                    : ""}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg text-[#f93b1d] font-[700] leading-[22px]">
              ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ
            </h2>
            <p className="max-w-[432px] text-base text-[#000] font-[400] leading-[1.38]">
              {context.data.general.aboutMe ? context.data.general.aboutMe : ""}
            </p>
          </div>
        </aside>
        <img
          src={context.data.general.image ? context.data.general.image : ""}
          alt="avatar"
          className="w-[246] h-[246px] rounded-[133px]"
        />
      </section>
      <img
        src="/redberryMiniLogo.png"
        alt="logo"
        className="w-[42px] h-[42px]"
      />
    </main>
  );
}

export default Resume;
