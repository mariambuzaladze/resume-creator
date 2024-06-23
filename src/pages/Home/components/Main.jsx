import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="h-screen flex justify-center items-center">
      <Link to={"/private"}>
        <button className="bg-[#1A1A1A] text-white rounded-md pt-4 pb-4 p-16">
          რეზიუმეს დამატება
        </button>
      </Link>
    </main>
  );
}
