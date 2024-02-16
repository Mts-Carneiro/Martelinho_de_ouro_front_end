import { useEffect, useState, createContext } from "react";
import { IServices } from "../Interfaces/service.interface";
import api from "../Service/api";

interface iServiceContextProps {
  children: React.ReactNode;
}

interface iServiceContext {
  services: IServices;
}

export const ServiceContext = createContext({} as iServiceContext);

const ServiceProvider = ({ children }: iServiceContextProps) => {
  const [services, setServices] = useState<IServices>([]);

  const loadServices = async () => {
    const token = localStorage.getItem("@Token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.get(`/service`);
    setServices(data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <ServiceContext.Provider value={{ services }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
