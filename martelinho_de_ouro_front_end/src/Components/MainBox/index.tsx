import { Table } from "./Table";
import { StyledMainBox } from "./styles";

export const Main = () => {
  return (
    <StyledMainBox>
      <div className="options_header">
        <div className="options_filter">
          <h6>Todos</h6>
          <h6>Atrasados</h6>
          <h6>Dentro do Prazo</h6>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <Table></Table>
    </StyledMainBox>
  );
};
