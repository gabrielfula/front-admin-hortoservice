import Private from "@/components/Layout/PrivateLayout/Private"
import Public from "@/components/Layout/PublicLayout/Public"
import Signin from "@/components/Login/Signin"
import { useAuth } from "@/context/auth"
import Clients from "@/pages/Clients/Clients"
import Dashboard from "@/pages/Dashboard/Dashboard"
import Orders from "@/pages/Orders/Orders"
import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

export default function AppRoutes() {

  const { user, token } = useAuth();

  const navigate = useNavigate()

  useEffect(() => {
    if (!token && !user) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <Routes>
          <Route element={<Public />} >
            <Route path="/" element={<Signin />} />
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
