import Billing from "../../components/Billing";
import Header from "../../components/nav/Header";
import Sidebar from "../../components/nav/Sidebar";

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
