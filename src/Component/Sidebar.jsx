import { useContext } from "react"
import dataContext from "../Context/dataContext";

export default function Sidebar() {
    const {state} = useContext(dataContext)
    const {allData} = state;
    console.log(allData);
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
    Object.entries(allData).map(([key, value])=>{
        avg.math += value.math;
        avg.chemistry += value.chemistry;
        avg.physics += value.physics;
        avg.english += value.english;
        avg.computer += value.computer;
        count++;
        return value;
    })

    return (
        <div className="sidebar">
            <div className="avg"> Class Average: </div>
            <ul>
                <li>Math : {avg.math / count}</li>
                <li>Chemistry : {avg.chemistry / count}</li>
                <li>Physics : {avg.physics / count}</li>
                <li>English : {avg.english / count}</li>
                <li>Computer : {avg.computer / count}</li>
            </ul>
            <hr/>
            <div>
                Total : {(avg.math + avg.chemistry + avg.physics + avg.english + avg.computer)/count}
            </div>
        </div>
    )
}