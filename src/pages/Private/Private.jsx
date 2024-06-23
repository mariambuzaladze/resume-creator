import { Link } from "react-router-dom";
import Header from "./components/Header";

export default function Private() {
  return (
    <div>
      <Header />
      <Link to={"/experience"}>
        <button>შემდეგი</button>
      </Link>
    </div>
  );
}
