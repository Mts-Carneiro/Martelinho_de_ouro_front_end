import { StyledActionBox } from "./styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";
import { useContext } from "react";
import { ServiceContext } from "../../../../../Context/serviceContext";
import { AssetContext } from "../../../../../Context/assetsContext";
import { LiabilityContext } from "../../../../../Context/liabilityContext";

export const ActionBox = (Props: any) => {
  const {
    setServiceId,
    setDeleteServiceModal,
    setRetriveServiceModal,
    setUpdateServiceModal,
    retriveService,
  } = useContext(ServiceContext);

  const deleteService = () => {
    setServiceId(Props.serviceId);
    setDeleteServiceModal(true);
  };

  const updateService = () => {
    setServiceId(Props.serviceId);
    setUpdateServiceModal(true);
  };

  const retriveServiceModal = () => {
    retriveService(Props.serviceId);
    setRetriveServiceModal(true);
  };

  return (
    <StyledActionBox>
      <FaSearchPlus onClick={() => retriveServiceModal()} />
      <CiEdit onClick={() => updateService()} />
      <RiDeleteBin6Line onClick={() => deleteService()} />
    </StyledActionBox>
  );
};

export const AssetActionBox = (Props: any) => {
  const { setAssetId, setDeleteAssetModal, setUpdateAssetModal } =
    useContext(AssetContext);

  const updateAsset = () => {
    setAssetId(Props.assetId);
    setUpdateAssetModal(true);
  };

  const deleteAsset = () => {
    setAssetId(Props.assetId);
    setDeleteAssetModal(true);
  };

  return (
    <StyledActionBox>
      <CiEdit onClick={() => updateAsset()} />
      <RiDeleteBin6Line onClick={() => deleteAsset()} />
    </StyledActionBox>
  );
};

export const LiabilityActionBox = (Props: any) => {
  const { setDeleteLiabilityModal, setUpdateLiabilityModal, setLiabilityId } =
    useContext(LiabilityContext);

  const updateLiability = () => {
    setLiabilityId(Props.liabilityId);
    setUpdateLiabilityModal(true);
  };

  const deleteLiability = () => {
    setLiabilityId(Props.liabilityId);
    setDeleteLiabilityModal(true);
  };

  return (
    <StyledActionBox>
      <CiEdit onClick={() => updateLiability()} />
      <RiDeleteBin6Line onClick={() => deleteLiability()} />
    </StyledActionBox>
  );
};
