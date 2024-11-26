import useConfigVideoAnalysisDetails from "../../Hooks/useConfigVideoAnalysisDetails"
import "./AnalysisDetailsList.css"
import { GiSettingsKnobs } from "react-icons/gi";

function AnalysisDetailsList() {
    const data = useConfigVideoAnalysisDetails()
    return <div className="analysis-details-list-container">
        <div className="analysis-details-list-header">
            <div className="analysis-details-list-header-label">Details</div>
            <div className="analysis-details-list-header-button">
                <div className="settings-button">
                    <GiSettingsKnobs color="#fbf9f8" size={30}/>
                </div>
            </div>
        </div>
        <div className="analysis-details-list-content">
            {data.map((item) => {
                return <div className="analysis-details-list-content-item-container">
                    <div className="analysis-details-list-content-item-left">
                        {item.label}
                    </div>
                    <div className="analysis-details-list-content-item-right">
                        {item.analysis.map((analysi) => {
                            return <div className={analysi.className}>
                                <div>
                                    {analysi.label}
                                </div>
                                <div className="all-analysis-child">
                                    {analysi.value}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div>
}
export default AnalysisDetailsList