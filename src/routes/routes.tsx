import Home from "@/pages/Home/Home"
import { Route, Routes } from "react-router-dom"

export default function AppRoutes() {
  return (
    <>
      <Routes>
          <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}
