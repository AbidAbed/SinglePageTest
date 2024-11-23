import useConfigNavigationPaths from "../Hooks/useConfigNavigationPaths"
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { IoIosAdd } from "react-icons/io";

function NavigationBar() {
    const [navigationElementsTop, NavigationElementsBottom] = useConfigNavigationPaths()
    const navigate = useNavigate();
    const location = useLocation();

    function handleNavigation(path) {
        navigate(path);
    }
    return <div className="flex flex-col p-2 bg-gray-100 items-center mt-5 mb-5 mr-8 rounded-xl shadow-sm transition-all">

        {/** Menu Top*/}
        <div className="flex flex-1 flex-col items-center gap-y-3 mt-2 ">

            {/** Logo and upload*/}
            <div className="flex flex-col items-center gap-y-2 ">
                <button onClick={() => handleNavigation("/")} >
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`}
                        alt="icon"
                        width={50}
                        height={50} />
                </button>

                <button className="bg-cyan-700 text-white hover:bg-cyan-800 flex flex-row items-center p-2 rounded-md text-xs	">
                    {<IoIosAdd size={15} />} Upload
                </button>
                <h3 className="text-gray-400 gap-y-3">Menu</h3>
            </div>

            {/** Menu Top*/}

            {navigationElementsTop.map((navigationElement) => {
                return <button className={`rounded-md p-2 hover:bg-gray-300 
                ${location.pathname === navigationElement.path ? "bg-gray-300" : ""}`}
                    onClick={() => handleNavigation(navigationElement.path)}>
                    {navigationElement.icon}
                </button>
            })}
        </div>

        {/** Menu Bottom*/}
        <div className="flex flex-col gap-y-3 items-center pb-16">
            {NavigationElementsBottom.map((navigationElement) => {
                return <button className={`rounded-md p-2 hover:bg-gray-300  
                    ${location.pathname === navigationElement.path ? "bg-gray-300" : ""}`}
                    onClick={() => handleNavigation(navigationElement.path)}>
                    {navigationElement.icon}
                </button>
            })}
            <hr class="border-t-2 border-gray-500 w-full" />
            {/** Menu Bottom Profile*/}
            <div className="flex flex-col items-center ">
                <h3 className="text-gray-400 mb-6">Profile</h3>
                <button onClick={() => handleNavigation("/")} className="rounded-full">
                    <img src={`${process.env.PUBLIC_URL}/profileExample.jpg`}
                        alt="profile"
                        width={50}
                        height={50}
                        className="rounded-full" />
                </button>
            </div>
        </div>


    </div>
}
export default NavigationBar