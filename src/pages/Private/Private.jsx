import { Link } from "react-router-dom";
import Header from "./components/Header";
import GoBack from "../../shared-components/GoBack";

export default function Private() {
  return (
    <div className="flex">
      <GoBack />
      <Header />
      <Link to={"/experience"}>
        <button>შემდეგი</button>
      </Link>
    </div>
  );
}
