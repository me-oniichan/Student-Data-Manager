import { useContext } from "react"
import dataContext from "../Context/dataContext";

export default function Sidebar() {
    const {state} = useContext(dataContext)
    const {allData} = state;
    if (allData.length === 0) return(
        <div className="no-data">
            No data available
        </div>
    )

    let avg = {
        math: 0,
        physics : 0,
        chemistry : 0,
        english : 0,
        computer : 0
    };

    let count = 0;
    let pass = 0;
    let fail = 0;
    Object.entries(allData).map(([key, value])=>{
        avg.math += parseInt(value.math);
        avg.chemistry +=parseInt( value.chemistry);
        avg.physics += parseInt(value.physics);
        avg.english += parseInt(value.english);
        avg.computer += parseInt(value.computer);
        count++;
        if (value.result === true) pass++;
        else fail++;
        return value;
    })

    return (
        <div className="sidebar">
            <h5> Class Average: </h5>
            <ul className="average">
                <li>Math : {parseInt(avg.math / count)}</li>
                <li>Chemistry : {parseInt(avg.chemistry / count)}</li>
                <li>Physics : {parseInt(avg.physics / count)}</li>
                <li>English : {parseInt(avg.english / count)}</li>
                <li>Computer : {parseInt(avg.computer / count)}</li>
            </ul>

            <div className="total">
                Total : {parseInt((avg.math + avg.chemistry + avg.physics + avg.english + avg.computer)/count)}
            </div>
            <hr/>
            <div>
                Total Students : {pass + fail}
            </div>
            <div>
                Student Passed : {pass}
            </div>
            <div>
                Student Failed : {fail}
            </div>
        </div>
    )
}