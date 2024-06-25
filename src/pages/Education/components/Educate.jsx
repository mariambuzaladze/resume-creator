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
      <section className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="xarisxi"
            className="text-base text-[#000] font-[500] leading-[1.31]"
          >
            ხარისხი
          </label>
          {/* <input id="xarisxi" type="checkbox" />
          <select name="" id="xarisxi" className="">
            xarisxi
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select> */}
          <div className="relative">
            <select className="appearance-none w-[371px] text-base text-[#000] opacity-60 font-[400] leading-[1.31] bg-[#fff] rounded-[4px] border border-[#bcbcbc] flex items-center justify-between px-4 py-[14px] focus:outline-none">
              <option value="" className="" hidden selected>
                აირჩიეთ ხარისხი
              </option>
              <option
                value="option1"
                // className="appearance-none text-base text-[#1a1a1a] font-[400] leading-[1.31] px-4 py-[10px]"
              >
                საშუალო სკოლის დიპლომი
              </option>
              <option value="option2">ზოგადსაგანმანათლებლო დიპლომი</option>
              <option value="option3">ბაკალავრი</option>
              <option value="option4">მაგისტრი</option>
              <option value="option5">დოქტორი</option>
              <option value="option6">ასოცირებული ხარისხი</option>
              <option value="option7">სტუდენტი</option>
              <option value="option8">კოლეჯი (ხარისხის გარეშე)</option>
              <option value="option9">სხვა</option>
            </select>
            <img
              src="/public/icon-arrow-down.svg"
              className="absolute right-[22px] top-[23px]"
              alt="Dropdown Icon"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="date"
            className="text-base text-[#000] font-[500] leading-[1.31]"
          >
            დამთავრების რიცხვი
          </label>
          <input
            id="date"
            type="date"
            className="outline-none w-[371px] rounded-[4px] px-4 py-[13px] text-base text-[#000] opacity-60 font-[400] leading-[1.31] border border-solid border-[#bcbcbc]"
          />
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
