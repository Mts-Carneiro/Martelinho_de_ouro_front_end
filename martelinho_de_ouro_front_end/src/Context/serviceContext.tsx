import { useEffect, useState, createContext } from "react";
import { IServiceRequest, IServices } from "../Interfaces/service.interface";
import api from "../Service/api";
import { toast } from "react-toastify";

interface iServiceContextProps {
  children: React.ReactNode;
}

interface iServiceContext {
  services: IServices;
  createServiceModal: boolean;
  setCreateServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  createService: (data: IServiceRequest) => Promise<void>;
}

export const ServiceContext = createContext({} as iServiceContext);

const ServiceProvider = ({ children }: iServiceContextProps) => {
  const [services, setServices] = useState<IServices>([]);
  const [createServiceModal, setCreateServiceModal] = useState<boolean>(false);

  const loadServices = async () => {
    try {
      const token = localStorage.getItem("@Token");
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/service`);
      setServices(data);
    } catch {
      console.log("Erro");
    }
  };

  const createService = async (data: IServiceRequest) => {
    try {
      const token = localStorage.getItem("@Token");
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post(`/service`, data);
      toast.success("Serviço criado com sucesso!");
      loadServices();
    } catch {
      toast.error("Este produto já está cadastrado.");
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        services,
        createServiceModal,
        setCreateServiceModal,
        createService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
