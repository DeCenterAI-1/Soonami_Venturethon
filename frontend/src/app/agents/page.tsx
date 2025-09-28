import Sidebar from "@/components/nav/Sidebar";
import APIsPage from "../../components/APIsPage";
import Header from "@/components/nav/Header";

export default function Agents() {
  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        <APIsPage />
      </div>
    </div>
  );
}
