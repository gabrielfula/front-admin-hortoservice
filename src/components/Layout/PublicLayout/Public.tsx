import ImageLogo from "../../../assets/images/image-logo-hortoservice.png"
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export default function Public() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="bg-zinc-950 w-1/2 flex justify-center items-center">
          <img src={ImageLogo} alt="Logo Hortoservices" width={500}/>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Outlet />
          <Toaster />
        </div>
      </div>
    </>
  )
}
