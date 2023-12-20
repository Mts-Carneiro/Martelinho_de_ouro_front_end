import { StyledActionBox } from "./styled";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";

export const ActionBox = () => {
  return (
    <StyledActionBox>
      <FaSearchPlus />
      <CiEdit />
      <RiDeleteBin6Line />
    </StyledActionBox>
  );
};
