import { SarchBar } from "./SearchBar";
import { StyledNavBar } from "./styled";

export const NavigateBar = () => {
  return (
    <StyledNavBar>
      <h2>Serviços</h2>
      <h2>Colaboradores</h2>
      <h2>Entradas</h2>
      <h2>Saidas</h2>
      <h2>Dashboard</h2>
      <SarchBar />
    </StyledNavBar>
  );
};
