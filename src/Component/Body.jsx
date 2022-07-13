export default function Body() {
    return (
        <div className="container">
            <table>
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dummy</td>
                        <td>pass</td>
                        <td className="shift-right">90</td>
                        <td className="shift-right">80</td>
                        <td className="shift-right">80</td>
                        <td className="shift-right">80</td>
                        <td className="shift-right">80</td>
                        <td>Excellent</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}