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
                icon: <RxDashboard size={20} color="black" />

            },
            {
                path: "/analysis",
                icon: <AiOutlinePieChart size={20} color="black" />
            },
            {
                path: "/files",
                icon: <FaRegFileLines size={20} color="black" />
            },
            {
                path: "/friends",
                icon: <GoPeople size={20} color="black" />
            },

        ],
        [
            {
                path: "/notifications",
                icon: <IoNotificationsOutline size={20} color="black" />

            },
            {
                path: "/settings",
                icon: <IoSettingsOutline size={20} color="black" />
            },
        ]
    ]
}

export default useConfigNavigationPaths