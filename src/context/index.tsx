import { createContext, useEffect, useState } from "react";
import { IAuthContext, IAuthProvider } from "./types";
import { useNavigate } from "react-router-dom";
import nookies from 'nookies'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProvider) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const cookies = nookies.get(null);
    const storedToken = cookies.token;
    const storedUser = cookies.user;

    try {
      if (storedToken) {
        setToken(JSON.parse(storedToken));
        setUser(JSON.parse(storedUser));
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error parsing stored data:", error);
      nookies.destroy(null, "token");
      nookies.destroy(null, "user");
      navigate("/");
    }
  }, [navigate]);

  const login = async (authentication: any) => {
    nookies.set(null, "user", JSON.stringify(authentication.user));
    nookies.set(null, "token", JSON.stringify(authentication.token));

    setUser(authentication.user)
    setToken(authentication.token)
  }

  const logout = async () => {
    nookies.destroy(null, "token");
    nookies.destroy(null, "user");

    setUser(null);
    setToken(null);
    
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{
      logout,
      login,
      user,
      token,
    }}>
      <>
        {children}
      </>
    </AuthContext.Provider>
  )

}
