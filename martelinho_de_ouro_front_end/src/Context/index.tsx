import { ReactNode } from "react";
import AuthProvider from "./AuthContext";
import ServiceProvider from "./serviceContext";

interface iProvider {
  children: ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <AuthProvider>
      <ServiceProvider>{children}</ServiceProvider>
    </AuthProvider>
  );
};
