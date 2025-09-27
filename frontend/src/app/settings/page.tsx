import Header from "../../components/Header";
import Settings from "../../components/Settings";
import Sidebar from "../../components/Sidebar";

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
