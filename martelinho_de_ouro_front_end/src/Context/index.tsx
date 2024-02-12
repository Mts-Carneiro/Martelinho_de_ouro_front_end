import { ReactNode } from "react";
import AuthProvider from "./AuthContext";

interface iProvider {
  children: ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return <AuthProvider>{children}</AuthProvider>;
};
