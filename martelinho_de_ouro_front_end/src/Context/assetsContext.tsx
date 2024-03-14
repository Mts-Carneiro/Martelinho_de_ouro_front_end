import { createContext, useEffect, useState } from "react";
import api from "../Service/api";
import { toast } from "react-toastify";
import {
  ICashOperationRequest,
  ICashOperationUpdate,
  ICashOperations,
} from "../Interfaces/cash_operation.interface";

interface iAssetContextProps {
  children: React.ReactNode;
}

interface iAssetContext {
  assets: ICashOperations;
  assetId: string;
  setAssetId: React.Dispatch<React.SetStateAction<string>>;
  createAssetModal: boolean;
  setCreateAssetModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateAssetModal: boolean;
  setUpdateAssetModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteAssetModal: boolean;
  setDeleteAssetModal: React.Dispatch<React.SetStateAction<boolean>>;
  createAsset: (data: ICashOperationRequest) => Promise<void>;
  updateAsset: (data: ICashOperationUpdate) => Promise<void>;
  deleteAsset: () => Promise<void>;
}

export const AssetContext = createContext({} as iAssetContext);

const AssetProvider = ({ children }: iAssetContextProps) => {
  const [assets, setAssets] = useState<ICashOperations>([]);
  const [assetId, setAssetId] = useState<string>("");
  const [createAssetModal, setCreateAssetModal] = useState<boolean>(false);
  const [updateAssetModal, setUpdateAssetModal] = useState<boolean>(false);
  const [deleteAssetModal, setDeleteAssetModal] = useState<boolean>(false);

  const token = localStorage.getItem("@Token");

  const loadAssets = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.get(`/asset`);
      setAssets(data);
    } catch {
      console.log("Erro");
    }
  };

  const createAsset = async (data: ICashOperationRequest) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post(`/asset`, data);
      toast.success("Entrada criada com sucesso!");
      loadAssets();
    } catch {
      toast.error("Algo deu errado na criação. Tente novamente.");
    }
  };

  const updateAsset = async (data: ICashOperationUpdate) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/asset/${assetId}`, data);
      setUpdateAssetModal(false);
      toast.success("Entrada atualizada com sucesso!");
      loadAssets();
    } catch {
      toast.error("Error");
    }
  };

  const deleteAsset = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/asset/${assetId}`);
      setDeleteAssetModal(false);
      toast.success("Entrada deletada!");
      loadAssets();
    } catch {
      toast.error("erro!");
    }
  };

  useEffect(() => {
    loadAssets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AssetContext.Provider
      value={{
        assets,
        setCreateAssetModal,
        setDeleteAssetModal,
        setUpdateAssetModal,
        createAssetModal,
        deleteAssetModal,
        updateAssetModal,
        createAsset,
        deleteAsset,
        updateAsset,
        assetId,
        setAssetId,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

export default AssetProvider;
