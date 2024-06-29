import { dataContext } from "../App";
import { useContext } from "react";

function Resume() {
  const context = useContext(dataContext);

  return (
    <main className=" px-20 py-[44px]">
      <section>
        <aside>
          <div>
            <p>
              {context.data.general.name ? context.data.general.name : ""}
              <span>
                {context.data.general.surname
                  ? context.data.general.surname
                  : ""}
              </span>
            </p>
            <div>
              <div>
                <img src="" alt="" />
                <span>
                  {context.data.general.email ? context.data.general.email : ""}
                </span>
              </div>
              <div>
                <img src="" alt="" />
                <span>
                  {context.data.general.number
                    ? context.data.general.number
                    : ""}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h2>
            <p>
              {context.data.general.aboutMe ? context.data.general.aboutMe : ""}
            </p>
          </div>
        </aside>
        <img
          //   src={context.data.general.image ? context.data.general.image : ""}
          alt="avatar"
        />
      </section>
    </main>
  );
}

export default Resume;
