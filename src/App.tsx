import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "./style/globals.css";
import { AuthProvider } from "./context";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}
