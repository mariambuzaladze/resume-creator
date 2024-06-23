import Line from "../../../shared-components/Line";

export default function Header() {
  return (
    <header className="flex">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">პირადი ინფო</h1>
          <p>1/3</p>
        </div>
        <Line />
      </div>
    </header>
  );
}
