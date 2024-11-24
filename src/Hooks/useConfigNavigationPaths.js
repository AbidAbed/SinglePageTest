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
                icon: <RxDashboard  color="#89888c" />

            },
            {
                path: "/analysis",
                icon: <AiOutlinePieChart  color="#89888c" />
            },
            {
                path: "/files",
                icon: <FaRegFileLines  color="#89888c" />
            },
            {
                path: "/friends",
                icon: <GoPeople  color="#89888c" />
            },

        ],
        [
            {
                path: "/notifications",
                icon: <IoNotificationsOutline  color="#89888c" />

            },
            {
                path: "/settings",
                icon: <IoSettingsOutline  color="#89888c" />
            },
        ]
    ]
}

export default useConfigNavigationPaths