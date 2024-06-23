import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Link to={"/private"}>
      <button>რეზიუმეს დამატება</button>
    </Link>
  );
}
