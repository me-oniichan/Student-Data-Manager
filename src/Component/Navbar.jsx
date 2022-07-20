import { useContext } from "react";
import { Link } from "react-router-dom";
import { DATA_TO_UPDATE } from "../Context/action.type";
import dataContext from "../Context/dataContext";

export default function Navbar() {
    const { dispatch } = useContext(dataContext);
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="container-fluid">
                <span className="navbar-brand">Student Manage</span>
                <li className="nav-item">
                    <Link
                        className="nav-icon"
                        to="add"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-plus-square-fill"
                            viewBox="0 0 16 16"
                            onClick={() => {
                                dispatch({
                                    type: DATA_TO_UPDATE,
                                    payload: {
                                        name: "",
                                        result: 0,
                                        remark: "",
                                        math: "",
                                        physics: "",
                                        chemistry: "",
                                        english: "",
                                        computer: "",
                                    },
                                    key: null,
                                });
                            }}
                        >
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
