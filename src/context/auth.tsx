import { createContext, useState } from "react";
import { type IAuthContext, type IAuthContextProvider, type ILoginData } from "./types";
import { type IUser } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProvider) =>{
    const navigate = useNavigate();
    
    const [user, setUser] = useState<IUser>({} as IUser);

    const handleLogin = async (loginData: ILoginData) => {
        try {
            const url = `users?email=${loginData.email}&senha=${loginData.password}`;
            const { data } = await api.get(url);

            if (data.length === 1) {
                setUser(data[0]);
                navigate('/feed');
            } else {
                alert('Email ou senha inválidos');
            }
        } catch (err) {
            alert(`Houve um erro. Detalhes: ${err}`);
        }
    }

    const handleSignOut = () => {
        setUser({} as IUser);
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}