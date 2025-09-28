import Header from "../../components/nav/Header";
import Settings from "../../components/Settings";
import Sidebar from "../../components/nav/Sidebar";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Settings />
      </div>
    </div>
  );
}
