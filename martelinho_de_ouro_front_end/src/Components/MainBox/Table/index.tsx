import { useContext } from "react";
import { ActionBox, AssetActionBox, LiabilityActionBox } from "./Tr/ActionBox";
import { StyledTable } from "./styles";
import { ServiceContext } from "../../../Context/serviceContext";
import { format } from "date-fns";
import { IService } from "../../../Interfaces/service.interface";
import { AssetContext } from "../../../Context/assetsContext";
import { ICashOperation } from "../../../Interfaces/cash_operation.interface";
import { LiabilityContext } from "../../../Context/liabilityContext";

export const TableService = () => {
  const { services } = useContext(ServiceContext);
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Placa</th>
          <th>Veiculo</th>
          <th>Status</th>
          <th>Cliente</th>
          <th>Data de entrega</th>
          <th>Status de entrega</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {services.map((item: IService, i) => (
          <tr key={i}>
            <td>{item.license_plate}</td>
            <td>{item.vehicle}</td>
            <td>{item.status}</td>
            <td>{item.enterprise}</td>
            <td>{format(new Date(item.delivery_date), "dd/MM/yyyy")}</td>
            <td>Dentro do prazo</td>
            <td>
              <ActionBox key={item.id} serviceId={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export const TableEmployer = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Contato</th>
          <th>Salario</th>
          <th>Chave Pix</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Matheus Carneiro</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Matheus</td>
          <td>81995765808</td>
          <td>R$1000</td>
          <td>11122233310</td>
          <td>
            <ActionBox />
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export const TableAsset = () => {
  const { assets } = useContext(AssetContext);
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((item: ICashOperation, i) => (
          <tr key={i}>
            <td>{item.tipe}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>R$ {item.value},00</td>
            <td>{format(new Date(item.date), "dd/MM/yyyy")}</td>
            <td>
              <AssetActionBox key={item.id} assetId={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export const TableLiability = () => {
  const { liabilities } = useContext(LiabilityContext);
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {liabilities.map((item: ICashOperation, i) => (
          <tr key={i}>
            <td>{item.tipe}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>R$ {item.value},00</td>
            <td>{format(new Date(item.date), "dd/MM/yyyy")}</td>
            <td>
              <LiabilityActionBox key={item.id} liabilityId={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
