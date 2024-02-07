import { SarchBar } from "./SearchBar";
import { StyledNavBar } from "./styled";

export const NavigateBar = () => {
  return (
    <StyledNavBar>
      <div className="page_list">
        <p>Serviços</p>
        <p>Colaboradores</p>
        <p>Entradas</p>
        <p>Saidas</p>
        <p>Balanço</p>
      </div>
      <SarchBar />
    </StyledNavBar>
  );
};
