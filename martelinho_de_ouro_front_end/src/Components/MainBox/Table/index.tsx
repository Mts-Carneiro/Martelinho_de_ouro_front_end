import { StyledTable } from "./styles";

export const Table = () => {
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
        <tr>
          <td>2234567</td>
          <td>Gol</td>
          <td>Aprovado</td>
          <td>Particular</td>
          <td>15/12/2023</td>
          <td>Dentro do prazo</td>
          <td>
            <div>
              <h6>x</h6>
              <h6>i</h6>
              <h6>O</h6>
            </div>
          </td>
        </tr>
        <tr>
          <td>2234567</td>
          <td>Gol</td>
          <td>Aprovado</td>
          <td>Particular</td>
          <td>15/12/2023</td>
          <td>Dentro do prazo</td>
          <td>
            <div>
              <h6>x</h6>
              <h6>i</h6>
              <h6>O</h6>
            </div>
          </td>
        </tr>
        <tr>
          <td>2234567</td>
          <td>Gol</td>
          <td>Aprovado</td>
          <td>Particular</td>
          <td>15/12/2023</td>
          <td>Dentro do prazo</td>
          <td>
            <div>
              <h6>x</h6>
              <h6>i</h6>
              <h6>O</h6>
            </div>
          </td>
        </tr>
        <tr>
          <td>2234567</td>
          <td>Gol</td>
          <td>Aprovado</td>
          <td>Particular</td>
          <td>15/12/2023</td>
          <td>Dentro do prazo</td>
          <td>
            <div>
              <h6>x</h6>
              <h6>i</h6>
              <h6>O</h6>
            </div>
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};
