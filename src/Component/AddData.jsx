import { createBrowserHistory } from "history";
import { useContext } from "react";
import dataContext from "../Context/dataContext";
export default function AddData() {
    const history = createBrowserHistory();
    const { state, dispatch } = useContext(dataContext);
    const { dataKey } = state;
    return (
        <div
            className="modal fade show"
            id="addpopup"
            tabIndex="-1"
            aria-hidden="true"
            style={{ display: "block" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {dataKey === null ? "Add Data" : "Update Data"}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => { history.back() }}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Result</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="row g-3">
                            <div className="input-group input-group-sm mb-3 col">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Math</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3 col">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Chemistry</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3 col">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Physics</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3 col">
                                <span className="input-group-text" id="inputGroup-sizing-sm">English</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3 col">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Computer</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
