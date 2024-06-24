import { Link } from "react-router-dom";
import Educate from "./components/Educate";

function Education() {
  return (
    <main>
      <Educate />
      <button>სხვა სასწავლებლის დამატება</button>
      <div>
        <button>ᲣᲙᲐᲜ</button>
        <Link to={"/resume"}>
          <button>დასრულება</button>
        </Link>
      </div>
    </main>
  );
}

export default Education;
