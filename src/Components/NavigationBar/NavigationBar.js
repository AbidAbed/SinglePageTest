import useConfigNavigationPaths from "../../Hooks/useConfigNavigationPaths"
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { IoIosAdd } from "react-icons/io";
import "./NavigationBar.css"

function NavigationBar() {
    const [navigationElementsTop, NavigationElementsBottom] = useConfigNavigationPaths()
    const navigate = useNavigate();
    const location = useLocation();
    function handleNavigation(path) {
        navigate(path);

    }
    return <div className="nav-bar-Container">

        {/** Menu Top*/}
        <div className="top-menu">

            {/** Logo and upload*/}
            <div
                onClick={() => handleNavigation("/")}
                className="site-logo"
            />
            <button className="upload">
                {<IoIosAdd />} Upload
            </button>
            <h3 className="">Menu</h3>

            {/** Menu Top*/}

            {navigationElementsTop.map((navigationElement) => {
                return <div className={`menu-option 
                ${location.pathname === navigationElement.path ? "menu-option-selected" : ""}`}
                    onClick={() => handleNavigation(navigationElement.path)}>
                    {navigationElement.icon}
                </div>
            })}
        </div>

        {/** Menu Bottom*/}
        <div className="bottom-menu">
            {NavigationElementsBottom.map((navigationElement) => {
                return <div className={`menu-option  
                    ${location.pathname === navigationElement.path ? "menu-option-selected" : ""}`}
                    onClick={() => handleNavigation(navigationElement.path)}>
                    {navigationElement.icon}
                </div>
            })}


            <hr className="border-line-separator" />

            {/** Menu Bottom Profile*/}
            <h3>Profile</h3>
            <div
                onClick={() => handleNavigation("/profile")}
                className="profile-picture"
            />

        </div>


    </div>
}
export default NavigationBar