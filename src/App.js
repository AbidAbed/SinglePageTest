import { BrowserRouter, Route, Routes } from "react-router"
import DashBoard from "./Pages/DashBoard/DashBoard"
import Analysis from "./Pages/Analysis/Analysis"
import Files from "./Pages/Files/Files"
import Notifications from "./Pages/Notifications/Notifications"
import Settings from "./Pages/Settings/Settings"
import Profile from "./Pages/Profile/Profile"
import Friends from "./Pages/Friends/Friends"
import NavigationBar from "./Components/NavigationBar/NavigationBar"
import "./App.css"
function App() {
  return <div className="page-container">

    <BrowserRouter >
      <div className="page">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/files" element={<Files />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
      <NavigationBar />
    </BrowserRouter>
  </div>
}
export default App