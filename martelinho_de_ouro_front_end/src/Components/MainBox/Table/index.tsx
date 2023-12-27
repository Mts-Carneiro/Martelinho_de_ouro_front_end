import { Tr } from "./Tr";
import { ActionBox } from "./Tr/ActionBox";
import { StyledTable } from "./styles";

export const TableService = () => {
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
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
        <Tr />
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
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Recibo Onix</td>
          <td>Serviço</td>
          <td>Teste de descrição</td>
          <td>R$200,00</td>
          <td>21/10/23</td>
          <td>
            <ActionBox />
          </td>
        </tr>
        <tr>
          <td>Recibo Onix</td>
          <td>Serviço</td>
          <td>Teste de descrição</td>
          <td>R$200,00</td>
          <td>21/10/23</td>
          <td>
            <ActionBox />
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};
