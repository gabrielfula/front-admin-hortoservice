import { BarChart3, LogOut, NotebookText, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside className="flex justify-between h-full w-full items-center flex-col py-10">
        <div>
          <img src="" alt="Logo" />
        </div>
        <div className="flex flex-col gap-8 mb-60">
          <div>
            <Link to={'/dashboard'} className="flex gap-2 items-center" >
              <BarChart3 size={18} strokeWidth={2} /> Dashboard
            </Link>
          </div>
          <div>
            <Link to={'/clientes'} className="flex gap-2 items-center" >
              <Users size={18} strokeWidth={2} /> Clientes
            </Link>
          </div>
          <div>
            <Link to={'/pedidos'} className="flex gap-2 items-center" >
              <NotebookText size={18} strokeWidth={2} /> Pedidos
            </Link>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <LogOut size={18} strokeWidth={2} /> Logout
        </div>
      </aside>
    </>
  )
}
