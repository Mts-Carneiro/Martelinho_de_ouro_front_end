import { StyledActionBox } from "./styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";
import { useContext } from "react";
import { ServiceContext } from "../../../../../Context/serviceContext";

export const ActionBox = (Props: any) => {
  const {
    setServiceId,
    setDeleteServiceModal,
    setRetriveServiceModal,
    setUpdateServiceModal,
  } = useContext(ServiceContext);

  const deleteService = () => {
    setServiceId(Props.serviceId);
    setDeleteServiceModal(true);
  };

  const updateService = () => {
    setServiceId(Props.serviceId);
    setUpdateServiceModal(true);
  };

  return (
    <StyledActionBox>
      <FaSearchPlus />
      <CiEdit onClick={() => updateService()} />
      <RiDeleteBin6Line onClick={() => deleteService()} />
    </StyledActionBox>
  );
};
