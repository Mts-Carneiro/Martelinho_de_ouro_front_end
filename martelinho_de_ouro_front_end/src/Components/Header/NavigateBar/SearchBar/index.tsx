import { StyledSearchBar } from "./styled";
import { BiSearch } from "react-icons/bi";

export const SarchBar = () => {
  return (
    <StyledSearchBar>
      <input placeholder="Buscar por placa ou modelo" />
      <BiSearch />
    </StyledSearchBar>
  );
};
