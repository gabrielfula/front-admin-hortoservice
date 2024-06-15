import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { useForm } from "react-hook-form"
import { AuthService } from "@/services/auth.service";
import { useToast } from "../ui/use-toast";
import { useAuth } from "@/context/auth";

export default function Signin() {

  const {
    register,
    handleSubmit,
    // formState,
  } = useForm<any>()

  const { toast } = useToast()

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (data: any) => {
    try {
      const response = await AuthService.signin(data.username, data.password);

      await login(response);

      navigate('/dashboard');
    } catch (error: any) {
      console.log(error)
      toast({
        variant: "destructive",
        description: `${error.response.data.description}`,
      })
    }    
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)} className="w-2/5">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-2xl text-center">Login</h1>
          <div>
            <Label>E-mail</Label>
            <Input placeholder="usuario@exemplo.com"  {...register('username')} type="text" />
           
          </div>
          <div>
            <Label>Senha</Label>
            <Input placeholder="senha..." {...register('password')} type="text" />
          </div>
          <div>
            <Button className="w-full">Entrar</Button>
          </div>
        </div>
      </form>
    </>
  )
}
