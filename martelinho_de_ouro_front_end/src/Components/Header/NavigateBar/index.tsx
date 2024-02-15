import { useNavigate } from "react-router-dom";
import { SarchBar } from "./SearchBar";
import { StyledNavBar } from "./styled";

export const NavigateBar = () => {
  const navigate = useNavigate();

  const goTo = (page: string) => {
    navigate(page);
  };

  return (
    <StyledNavBar>
      <div className="page_list">
        <p className="underline" onClick={() => goTo("/")}>
          Dashboard
        </p>
        <p className="underline" onClick={() => goTo("/service")}>
          Serviços
        </p>
        <p className="underline" onClick={() => goTo("/employe")}>
          Colaboradores
        </p>
        <p className="underline" onClick={() => goTo("/asset")}>
          Entradas
        </p>
        <p className="underline" onClick={() => goTo("/liability")}>
          Saidas
        </p>
        <p className="underline" onClick={() => goTo("/")}>
          Balanço
        </p>
      </div>
      <SarchBar />
    </StyledNavBar>
  );
};
