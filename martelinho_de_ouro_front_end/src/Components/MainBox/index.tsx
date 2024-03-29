import { useContext } from "react";
import {
  TableAsset,
  TableEmployer,
  TableLiability,
  TableService,
} from "./Table";
import { StyledMainBox } from "./styles";
import { ServiceContext } from "../../Context/serviceContext";
import { AssetContext } from "../../Context/assetsContext";
import { LiabilityContext } from "../../Context/liabilityContext";

export const MainService = () => {
  const { setCreateServiceModal } = useContext(ServiceContext);

  return (
    <StyledMainBox>
      <div className="options_header">
        <div className="options_filter">
          <h6>Todos</h6>
          <h6>Atrasados</h6>
          <h6>Dentro do Prazo</h6>
        </div>
        <button onClick={() => setCreateServiceModal(true)}>
          Adicionar um Serviço
        </button>
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
  const { setCreateAssetModal } = useContext(AssetContext);
  return (
    <StyledMainBox>
      <div className="table_div">
        <div className="table_div_add_button">
          <button onClick={() => setCreateAssetModal(true)}>
            Adicionar Entrada
          </button>
        </div>
        <TableAsset></TableAsset>
      </div>
    </StyledMainBox>
  );
};

export const MainLiability = () => {
  const { setCreateLiabilityModal } = useContext(LiabilityContext);
  return (
    <StyledMainBox>
      <div className="table_div">
        <div className="table_div_add_button">
          <button onClick={() => setCreateLiabilityModal(true)}>
            Adicionar Despesa
          </button>
        </div>
        <TableLiability></TableLiability>
      </div>
    </StyledMainBox>
  );
};
