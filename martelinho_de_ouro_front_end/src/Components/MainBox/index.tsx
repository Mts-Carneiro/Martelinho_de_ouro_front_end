import {
  TableAsset,
  TableEmployer,
  TableLiability,
  TableService,
} from "./Table";
import { StyledMainBox } from "./styles";

export const MainService = () => {
  return (
    <StyledMainBox>
      <div className="options_header">
        <div className="options_filter">
          <h6>Todos</h6>
          <h6>Atrasados</h6>
          <h6>Dentro do Prazo</h6>
        </div>
        <button>Adicionar um Servio</button>
      </div>
      <div className="table_div">
        <TableService></TableService>
      </div>
    </StyledMainBox>
  );
};

export const MainEmployees = () => {
  return (
    <StyledMainBox>
      <div className="table_div">
        <TableEmployer></TableEmployer>
      </div>
    </StyledMainBox>
  );
};

export const MainAsset = () => {
  return (
    <StyledMainBox>
      <div className="table_div">
        <div className="table_div_add_button">
          <button>Adicionar Entrada</button>
        </div>
        <TableAsset></TableAsset>
      </div>
    </StyledMainBox>
  );
};

export const MainLiability = () => {
  return (
    <StyledMainBox>
      <div className="table_div">
        <div className="table_div_add_button">
          <button>Adicionar Despesa</button>
        </div>
        <TableLiability></TableLiability>
      </div>
    </StyledMainBox>
  );
};
