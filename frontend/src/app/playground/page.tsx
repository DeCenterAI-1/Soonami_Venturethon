import Header from "../../components/Header";
import Playground from "../../components/Playground";
import Sidebar from "../../components/Sidebar";

export default function PlaygroundPage() {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Playground />
      </div>
    </div>
  );
}
