import { createContext, useEffect, useState } from "react";
import api from "../Service/api";
import { toast } from "react-toastify";

interface iAssetContextProps {
  children: React.ReactNode;
}

interface iAssetContext {}

export const AssetContext = createContext({} as iAssetContext);

const AssetProvider = ({ children }: iAssetContextProps) => {
  const [assets, setAssets] = useState<any>([]);
  const [assetId, setAssetId] = useState<string>("");
  const [createAssetModal, setCreateAssetModal] = useState<boolean>(false);
  const [updateAssetModal, setUpdateAssetModal] = useState<boolean>(false);
  const [deleteAssetModal, setDeleteAssetModal] = useState<boolean>(false);
  const [retriveAssetModal, setRetriveAssetModal] = useState<boolean>(false);

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

  const createAsset = async (data: any) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post(`/asset`, data);
      toast.success("Entrada criada com sucesso!");
      loadAssets();
    } catch {
      toast.error("Algo deu errado na criação. Tente novamente.");
    }
  };

  const updateAsset = async (data: any) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/service/${assetId}`, data);
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
      await api.delete(`/service/${assetId}`);
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

  return <AssetContext.Provider value={{}}>{children}</AssetContext.Provider>;
};

export default AssetProvider;
