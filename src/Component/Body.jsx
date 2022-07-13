export default function Body() {
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th style={{ borderLeft: "0" }}>Name</th>
                        <th>Result</th>
                        <th>Math</th>
                        <th>Chemistry</th>
                        <th>Physics</th>
                        <th>English</th>
                        <th>Computer</th>
                        <th style={{ borderRight: "None" }}>Remark</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ borderLeft: "0" }}>Dummy</td>
                        <td>pass</td>
                        <td className="shift-right">90</td>
                        <td className="shift-right">80</td>
                        <td className="shift-right">80</td>
                        <td className="shift-right">80</td>
                        <td className="shift-right">80</td>
                        <td style={{ borderRight: "None" }}>Excellent</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}