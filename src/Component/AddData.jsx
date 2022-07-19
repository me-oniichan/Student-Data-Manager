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
                            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span> <br/>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text">Result</span>
                            <input type="radio" className="form-control" />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text">Remark</span>
                            <input type="radio" className="form-control" />
                        </div>
                        <div className="row g-3">
                            <div className="col sub-input">
                                <div className="label">Math</div>
                                <input type = "number" className="form-control"/>
                            </div>
                            <div className="col sub-input">
                                <div className="label">Chemistry</div>
                                <input type = "number" className="form-control"/>
                            </div>
                            <div className="col sub-input">
                                <div className="label">Physics</div>
                                <input type = "number" className="form-control"/>
                            </div>
                            <div className="col sub-input">
                                <div className="label">English</div>
                                <input type = "number" className="form-control"/>
                            </div>
                            <div className="col sub-input">
                                <div className="label">Computer</div>
                                <input type = "number" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
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
