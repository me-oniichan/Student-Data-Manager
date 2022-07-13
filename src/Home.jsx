import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Body from "./Component/Body";

export default function Home() {
    return (
        <div className="App">
            <Navbar />
            <div className="sectors">
                <Sidebar />
                <Body/>
            </div>
        </div>
    );
}