import { fetchRevenue } from "@/app/lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";


export default async function Page() {


  const revenue =await fetchRevenue();


  return <>
  <h1 className={`mb-4 text-xl md:text-2xl`}>
    Dashboard
  </h1>
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
    {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
    {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
    {/* <Card
      title="Total Customers"
      value={numberOfCustomers}
      type="customers"
    /> */}
  </div>
  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
    <RevenueChart revenue={revenue}  />
    {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
  </div>
</>

}