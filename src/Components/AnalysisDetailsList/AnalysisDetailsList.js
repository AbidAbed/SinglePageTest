import useConfigVideoAnalysisDetails from "../../Hooks/useConfigVideoAnalysisDetails"
import "./AnalysisDetailsList.css"
function AnalysisDetailsList() {
    const data = useConfigVideoAnalysisDetails()
    return <div className="analysis-details-list-container">
        <div className="analysis-details-list-header">
            <div className="analysis-details-list-header-label">Details</div>
            <div className="analysis-details-list-header-button">button</div>
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