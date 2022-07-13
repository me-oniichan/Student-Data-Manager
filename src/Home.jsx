import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";

export default function Home() {
    return (
        <div className="App">
            <Navbar />
            <div className="sectors">
                <Sidebar />
                <div class ="body">
                    Add list here
                </div>
            </div>
        </div>
    );
}