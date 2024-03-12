import { useEffect, useState, createContext } from "react";
import {
  IService,
  IServiceRequest,
  IServiceUpdate,
  IServices,
} from "../Interfaces/service.interface";
import api from "../Service/api";
import { toast } from "react-toastify";

interface iServiceContextProps {
  children: React.ReactNode;
}

interface iServiceContext {
  services: IServices;
  service: IService | undefined;
  createServiceModal: boolean;
  setCreateServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateServiceModal: boolean;
  setUpdateServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteServiceModal: boolean;
  setDeleteServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  retriveServiceModal: boolean;
  setRetriveServiceModal: React.Dispatch<React.SetStateAction<boolean>>;
  serviceId: string;
  setServiceId: React.Dispatch<React.SetStateAction<string>>;
  createService: (data: IServiceRequest) => Promise<void>;
  retriveService: (serviceId: string) => Promise<void>;
  updateService: (data: IServiceUpdate) => Promise<void>;
  deleteService: () => Promise<void>;
}

export const ServiceContext = createContext({} as iServiceContext);

const ServiceProvider = ({ children }: iServiceContextProps) => {
  const [services, setServices] = useState<IServices>([]);
  const [service, setService] = useState<IService>();
  const [serviceId, setServiceId] = useState<string>("");
  const [createServiceModal, setCreateServiceModal] = useState<boolean>(false);
  const [updateServiceModal, setUpdateServiceModal] = useState<boolean>(false);
  const [deleteServiceModal, setDeleteServiceModal] = useState<boolean>(false);
  const [retriveServiceModal, setRetriveServiceModal] =
    useState<boolean>(false);

  const token = localStorage.getItem("@Token");

  const loadServices = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/service`);
      setServices(data);
    } catch {
      console.log("Erro");
    }
  };

  const createService = async (data: IServiceRequest) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post(`/service`, data);
      toast.success("Serviço criado com sucesso!");
      loadServices();
    } catch {
      toast.error("Este produto já está cadastrado.");
    }
  };

  const retriveService = async (serviceId: string) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/service/${serviceId}`);
      setService(data);
    } catch {
      toast.error("Error");
    }
  };

  const updateService = async (data: IServiceUpdate) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/service/${serviceId}`, data);
      setUpdateServiceModal(false);
      loadServices();
    } catch {
      toast.error("Error");
    }
  };

  const deleteService = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/service/${serviceId}`);
      setDeleteServiceModal(false);
      loadServices();
    } catch {
      toast.error("erro!");
    }
  };

  useEffect(() => {
    loadServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        services,
        createServiceModal,
        setCreateServiceModal,
        updateServiceModal,
        setUpdateServiceModal,
        retriveServiceModal,
        setRetriveServiceModal,
        deleteServiceModal,
        setDeleteServiceModal,
        createService,
        service,
        updateService,
        retriveService,
        deleteService,
        serviceId,
        setServiceId,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
