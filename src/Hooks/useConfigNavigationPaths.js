import { GoPeople } from "react-icons/go";
import { AiOutlinePieChart } from "react-icons/ai";

import { FaRegFileLines } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

function useConfigNavigationPaths() {
    return [
        [
            {
                path: "/",
                icon: <RxDashboard  color="black" />

            },
            {
                path: "/analysis",
                icon: <AiOutlinePieChart  color="black" />
            },
            {
                path: "/files",
                icon: <FaRegFileLines  color="black" />
            },
            {
                path: "/friends",
                icon: <GoPeople  color="black" />
            },

        ],
        [
            {
                path: "/notifications",
                icon: <IoNotificationsOutline  color="black" />

            },
            {
                path: "/settings",
                icon: <IoSettingsOutline  color="black" />
            },
        ]
    ]
}

export default useConfigNavigationPaths