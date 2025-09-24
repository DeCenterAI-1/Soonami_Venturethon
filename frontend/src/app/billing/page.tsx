import Billing from "../components/Billing";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function BillingPage() {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Billing />
      </div>
    </div>
  );
}
