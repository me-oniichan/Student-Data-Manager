import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import Body from "./Component/Body";
import { Outlet } from "react-router";

export default function Home() {
    return (
        <div className="App">
            <Outlet />
            <Navbar />
            <div className="sectors">
                <Sidebar />
                <Body />
            </div>
        </div>
    );
}
