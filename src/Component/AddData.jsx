import { getDatabase, ref, set } from "firebase/database";
import { createBrowserHistory } from "history";
import { useContext, useState } from "react";
import { v4 } from "uuid";
import { DATA_TO_UPDATE } from "../Context/action.type";
import dataContext from "../Context/dataContext";

export default function AddData({db}) {
    const history = createBrowserHistory();
    const { state, dispatch } = useContext(dataContext);
    const { dataKey, updateData } = state;
    const [data, setData] = useState(updateData.name);
    const [remark, setRemark] = useState(updateData.remark);
    const [marks, setMarks] = useState([
        updateData.math,
        updateData.physics,
        updateData.english,
        updateData.chemistry,
        updateData.computer,
    ]);
    
    const updateFirebase = (key)=>{
        set(ref(getDatabase(db), "/"+key),{
            name: data,
            remark,
            result: (sum(marks) >= 170),
            math : marks[0],
            physics : marks[1],
            english : marks[2],
            chemistry : marks[3],
            computer : marks[4],
        })
    }

    const changemark = (idx, val) => {
        setMarks(
            marks.map((mark, i) => {
                if (i === idx) return val? parseFloat(val): "";
                else return mark;
            })
        );
    };

    const sum = (arr)=>{
        let res = 0;
        arr.forEach(element => {
           res+=element 
        });
        return res;
    }

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
                            onClick={() => {
                                history.back();
                            }}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group input-group-sm mb-3">
                            <span
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                            >
                                Name
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                value={data}
                                onChange={(e) => {
                                    setData(e.target.value);
                                }}
                            />
                        </div>
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text">Remark</span>
                            <input
                                type="text"
                                className="form-control"
                                value={remark}
                                onChange={(e) => {
                                    setRemark(e.target.value);
                                }}
                            />
                        </div>
                        <div className="row g-3">
                            <div className="col sub-input">
                                <div className="label">Math</div>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={marks[0]}
                                    onChange={(e) => {
                                        changemark(0, e.target.value);
                                    }}
                                />
                            </div>
                            <div className="col sub-input">
                                <div className="label">Chemistry</div>
                                <input type="number" className="form-control" value={marks[3]}
                                    onChange={(e) => {
                                        changemark(3, e.target.value);
                                    }}/>
                            </div>
                            <div className="col sub-input">
                                <div className="label">Physics</div>
                                <input type="number" className="form-control" value={marks[1]}
                                    onChange={(e) => {
                                        changemark(1, e.target.value);
                                    }} />
                            </div>
                            <div className="col sub-input">
                                <div className="label">English</div>
                                <input type="number" className="form-control" value={marks[2]}
                                    onChange={(e) => {
                                        changemark(2, e.target.value);
                                    }} />
                            </div>
                            <div className="col sub-input">
                                <div className="label">Computer</div>
                                <input type="number" className="form-control" value={marks[4]}
                                    onChange={(e) => {
                                        changemark(4, e.target.value);
                                    }} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                history.back();
                            }}
                        >
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={()=>{
                            const key = dataKey === null? v4() : dataKey;
                            dispatch({
                                type: DATA_TO_UPDATE,
                                payload:{
                                    name: data,
                                    remark,
                                    result: (sum(marks) >= 170),
                                    math : marks[0],
                                    physics : marks[1],
                                    english : marks[2],
                                    chemistry : marks[3],
                                    computer : marks[4],
                                },
                                key
                            })
                            updateFirebase(key);
                            history.back();
                        }}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
