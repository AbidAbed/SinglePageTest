import { PieChart } from "@mui/x-charts"
import useTestChartData from "../../Hooks/useTestChartData"
import { useState } from "react"
import { FaInfoCircle } from "react-icons/fa";
import "./Chart.css"


function Chart() {
    const data = useTestChartData()
    const [score, setScore] = useState(92)

    return <div className="chart-container">
        <div className="score-container ">
            <div className="score">
                <h1>Score</h1>
                <h2>{score}%</h2>
            </div>
            <div class="hover-container">
                <p><FaInfoCircle color="#bdbdbd" /></p>
                <div class="hover-info">Here is the additional information.</div>
            </div>
        </div>
        <hr className="border-line-separator1" />
        <div
            className="pie-chart-container"
        >
            <PieChart
                slotProps={{
                    legend: {
                        padding: 0,
                        labelStyle: { fontSize: 9 },
                        itemMarkHeight: 2,
                    },
                }}
                className="pie-chart"
                width={400} // Explicit width for testing
                height={200} // Explicit height for testing
                colors={data.map((d) => d.fill)}
                resolveSizeBeforeRender={true}
                series={[
                    {
                        data,
                        dataKey: 'id', // Defines the key for the value in the data object
                        dataLabelKey: 'label', // Defines the key for the label
                        innerRadius: 0, // Customizes the radius
                        outerRadius: '100%', // Use percentage for responsiveness
                    },
                ]}
            />
        </div>
    </div>
}
export default Chart