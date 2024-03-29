import { useContext } from "react";
import dataContext from "../Context/dataContext";
import Spinner from "./Spinner"
import { DATA_TO_UPDATE } from "../Context/action.type";
import { Link } from "react-router-dom";
import { getDatabase, ref, remove } from "firebase/database";
import {app} from "../Firebase/firebase_config"


export default function Body() {
    const { state, dispatch } = useContext(dataContext);
    const { allData, loading } = state;

    const removedata=(key)=>{
        remove(ref(getDatabase(app), "/"+key)).then(()=>{
            console.log("removed")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    if (loading) return <Spinner />
    else return (
        <div className="container-fluid">
            {allData.length === 0 ? (
                <span>Nothing to see here</span>
            ) : (
                <div className="table-responsive-xl">
                    <table className="table table-striped table-hover table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Result</th>
                                <th>Math</th>
                                <th>Chemistry</th>
                                <th>Physics</th>
                                <th>English</th>
                                <th>Computer</th>
                                <th>Remark</th>
                                <th colSpan={2}> </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {Object.entries(allData).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{value.name}</td>
                                    <td
                                        style={{
                                            backgroundColor: value.result
                                                ? "#38ff3f66"
                                                : "#ff3737a1",
                                        }}
                                    >
                                        {value.result ? "Pass" : "Fail"}
                                    </td>
                                    <td>{value.math}</td>
                                    <td>{value.chemistry}</td>
                                    <td>{value.physics}</td>
                                    <td>{value.english}</td>
                                    <td>{value.computer}</td>
                                    <td>{value.remark}</td>
                                    <td>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-trash3-fill"
                                            viewBox="0 0 16 16"
                                            onClick={()=>{
                                                removedata(key)
                                            }}
                                        >
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                        </svg>
                                    </td>
                                    <td>
                                        <Link to="add">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-pencil-fill"
                                            viewBox="0 0 16 16"
                                            onClick={()=>{
                                                dispatch({
                                                    type : DATA_TO_UPDATE,
                                                    payload : value,
                                                    key
                                                })
                                            }}
                                        >
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
