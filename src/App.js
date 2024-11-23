import { BrowserRouter, Route, Routes } from "react-router"
import DashBoard from "./Pages/DashBoard"
import NavigationBar from "./Components/NavigationBar"

function App() {
  return <div className="flex flex-row h-screen w-screen">

    <BrowserRouter >
      <div className="flex flex-col justify-center flex-1">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/analysis" element={<DashBoard />} />
          <Route path="/files" element={<DashBoard />} />
          <Route path="/friends" element={<DashBoard />} />
          <Route path="/notifications" element={<DashBoard />} />
          <Route path="/settings" element={<DashBoard />} />
          <Route path="/profile" element={<DashBoard />} />
        </Routes>
      </div>
      <NavigationBar />
    </BrowserRouter>
  </div>
}
export default App