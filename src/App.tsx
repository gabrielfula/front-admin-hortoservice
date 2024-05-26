import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "./style/globals.css";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </>
  )
}
