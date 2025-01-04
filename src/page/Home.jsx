import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import "../Home.css"
function Home() {
    return (
        <div className="home">
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <div className="main-content">
                <Dashboard />
            </div>
        </div>
    );
}

export default Home;
