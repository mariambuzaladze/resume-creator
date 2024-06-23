import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 pt-3 p-4 h-screen">
      <Header />
      <div className="h-[1px] bg-[#1A1A1A]"></div>
      <Main />
    </div>
  );
}
