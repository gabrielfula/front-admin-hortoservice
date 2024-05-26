import Private from "@/components/Layout/PrivateLayout/Private"
import Public from "@/components/Layout/PublicLayout/Public"
import Clients from "@/pages/Clients/Clients"
import Dashboard from "@/pages/Dashboard/Dashboard"
import Login from "@/pages/Login/Login"
import Orders from "@/pages/Orders/Orders"
import { Route, Routes } from "react-router-dom"

export default function AppRoutes() {
  return (
    <>
      <Routes>
          <Route element={<Public />} >
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<Private />} >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pedidos" element={<Orders />} />
            <Route path="/clientes" element={<Clients />} />
          </Route>
       </Routes>
    </>
  )
}
