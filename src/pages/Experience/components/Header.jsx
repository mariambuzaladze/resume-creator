import Line from "../../../shared-components/Line";

export default function Header() {
  return (
    <header className="flex">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg md:text-xl">გამოცდილება</h1>
          <p>2/3</p>
        </div>
        <Line />
      </div>
    </header>
  );
}
