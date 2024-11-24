import AnalysisDetailsList from "../../Components/AnalysisDetailsList/AnalysisDetailsList"
import Chart from "../../Components/Chart/Chart"
import Video from "../../Components/Video/Video"
import "./DashBoard.css"
function DashBoard() {
    return <div className="dashboard-container">
        <div className="video-analysis">
            <Chart />
            <Video />
        </div >
        <AnalysisDetailsList />
    </div>
}
export default DashBoard