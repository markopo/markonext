import GoodThings from "./good-things";

export default function DashboardPage() {

    const things = [ 'fish', 'beef', 'chicken'];

    console.log("DashboardPage", new Date());
    return (<div className="dashboard-page">
        <h1>Dashboard</h1>
        <GoodThings things={things} />
    </div>);
}