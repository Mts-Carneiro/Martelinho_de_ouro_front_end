import { createContext, useEffect, useState } from "react";
import api from "../Service/api";
import { toast } from "react-toastify";
import {
  ICashOperationRequest,
  ICashOperationUpdate,
  ICashOperations,
} from "../Interfaces/cash_operation.interface";

interface iLiabilityContextProps {
  children: React.ReactNode;
}

interface iLiabilityContext {
  liabilities: ICashOperations;
  liabilityId: string;
  setLiabilityId: React.Dispatch<React.SetStateAction<string>>;
  createLiabilityModal: boolean;
  setCreateLiabilityModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateLiabilityModal: boolean;
  setUpdateLiabilityModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteLiabilityModal: boolean;
  setDeleteLiabilityModal: React.Dispatch<React.SetStateAction<boolean>>;
  createLiability: (data: ICashOperationRequest) => Promise<void>;
  updateLiability: (data: ICashOperationUpdate) => Promise<void>;
  deleteLiability: () => Promise<void>;
}

export const LiabilityContext = createContext({} as iLiabilityContext);

const LiabilityProvider = ({ children }: iLiabilityContextProps) => {
  const [liabilities, setLiabilities] = useState<ICashOperations>([]);
  const [liabilityId, setLiabilityId] = useState<string>("");
  const [createLiabilityModal, setCreateLiabilityModal] =
    useState<boolean>(false);
  const [updateLiabilityModal, setUpdateLiabilityModal] =
    useState<boolean>(false);
  const [deleteLiabilityModal, setDeleteLiabilityModal] =
    useState<boolean>(false);

  const token = localStorage.getItem("@Token");

  const loadLiabilities = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/liability`);
      setLiabilities(data);
    } catch {
      console.log("Erro");
    }
  };

  const createLiability = async (data: ICashOperationRequest) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post(`/liability`, data);
      toast.success("Entrada criada com sucesso!");
      loadLiabilities();
    } catch {
      toast.error("Algo deu errado na criação. Tente novamente.");
    }
  };

  const updateLiability = async (data: ICashOperationUpdate) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/liability/${liabilityId}`, data);
      setUpdateLiabilityModal(false);
      toast.success("Entrada atualizada com sucesso!");
      loadLiabilities();
    } catch {
      toast.error("Error");
    }
  };

  const deleteLiability = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/liability/${liabilityId}`);
      setDeleteLiabilityModal(false);
      toast.success("Entrada deletada!");
      loadLiabilities();
    } catch {
      toast.error("erro!");
    }
  };

  useEffect(() => {
    loadLiabilities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LiabilityContext.Provider
      value={{
        liabilities,
        liabilityId,
        setCreateLiabilityModal,
        setDeleteLiabilityModal,
        setLiabilityId,
        setUpdateLiabilityModal,
        createLiabilityModal,
        deleteLiabilityModal,
        updateLiabilityModal,
        createLiability,
        updateLiability,
        deleteLiability,
      }}
    >
      {children}
    </LiabilityContext.Provider>
  );
};

export default LiabilityProvider;
