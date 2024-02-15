import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import api from "../Service/api";
import { toast } from "react-toastify";

interface iAuthContextProps {
  children: React.ReactNode;
}

interface iUser {
  trading_name: string;
  CNPJ: string;
  phone: string;
  email: string;
  id: string;
  createdAt: Date;
}

interface iUserRegister {
  trading_name: string;
  CNPJ: string;
  phone: string;
  email: string;
  password: string;
}

export interface iLogin {
  email: string;
  password: string;
}

interface iAuthContext {
  user: iUser | null;
  loginUser: (data: iLogin) => Promise<void>;
  registerUser: (data: iUserRegister) => Promise<void>;
  getUser: () => Promise<void>;
}

export const AuthContext = createContext({} as iAuthContext);

const AuthProvider = ({ children }: iAuthContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await api.get(
        `/user/${localStorage.getItem("@USER_ID")}`
      );
      setUser(data);
    } catch {
      console.log("erro");
    }
  };

  const loginUser = async (data: iLogin) => {
    try {
      const response = await api.post("/login", data);
      ReactModal.setAppElement("#root");
      const { token } = response.data;
      const decodedToken: any = jwtDecode(token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      localStorage.setItem("@Token", token);
      localStorage.setItem("@USER_ID", decodedToken?.id);
      getUser();
      navigate("/service");
      toast.success("Login realizado com sucesso!");
    } catch {
      toast.error("Verifique os dados informados e tente novamente!");
    }
  };

  const registerUser = async (data: iUserRegister) => {
    try {
      await api.post("/user", data);
      toast.success("Usuario cadastrado com sucesso!");
      try {
        loginUser({ email: data.email, password: data.password });
      } catch {}
    } catch {
      toast.error(
        "Não foi possível realizar o cadastro! Dados inseridos já cadastrados!"
      );
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, registerUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
