import type React from "react";
import type { IUser } from "../types/user";

export interface IAuthContext {
    user: IUser;
    handleLogin: (loginData: ILoginData) => Promise<void>;
    handleSignOut: () => void;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}