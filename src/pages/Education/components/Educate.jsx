function Educate() {
  return (
    <main className="flex flex-col gap-[31px] pb-[52px] border-b border-solid border-[#c1c1c1]">
      <section className="flex flex-col gap-2 mt-[77px]">
        <label
          htmlFor="saswavlebeli"
          className="text-base text-[#000] font-[500] leading-[1.31]"
        >
          სასწავლებელი
        </label>
        <input
          className="outline-none text-base text-[#000] font-[400] leading-[1.31] bg-[#fff] rounded-[4px] border border-solid border-[#bcbcbc] px-4 pt-[13px] pb-[14px] plceholder:text-base placeholder:text-[#000] placeholder:opacity-60 placeholder:font-[400] placeholder:leading-[1.31]"
          id="saswavlebeli"
          type="text"
          placeholder="სასწავლებელი"
        />
        <span className="text-sm text-[#2e2e2e] font-[300] leading-[1.5]">
          მინიმუმ 2 სიმბოლო
        </span>
      </section>
      <section className="flex items-center gap-[56px]">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="xarisxi"
            className="text-base text-[#000] font-[500] leading-[1.31]"
          >
            ხარისხი
          </label>
          <input id="xarisxi" type="checkbox" />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="date"
            className="text-base text-[#000] font-[500] leading-[1.31]"
          >
            დამთავრების რიცხვი
          </label>
          <input id="date" type="date" />
        </div>
      </section>
      <div className="flex flex-col gap-2 mt-1">
        <label
          htmlFor="description"
          className="text-base text-[#000] font-[500] leading-[1.31]"
        >
          აღწერა
        </label>
        <textarea
          name=""
          id="description"
          cols="30"
          rows="10"
          placeholder="განათლების აღწერა"
          className="h-[180px] text-base text-[#000] font-[400] leading-[1.38] bg-[#fff] rounded-[4px] border border-solid border-[#bcbcbc] pl-4 pr-[83px] py-[13px] resize-none outline-none placeholder:text-base placeholde:text-[#000] placeholder:opacity-60 placeholder:font-[400] placeholder:leading-[1.31]"
        ></textarea>
      </div>
    </main>
  );
}

export default Educate;
