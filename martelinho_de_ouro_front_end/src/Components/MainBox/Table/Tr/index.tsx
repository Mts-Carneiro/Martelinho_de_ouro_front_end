import { ActionBox } from "./ActionBox";
import { StyledTr } from "./styled";

export const Tr = () => {
  return (
    <StyledTr>
      <td>2234567</td>
      <td>Gol</td>
      <td>Aprovado</td>
      <td>Particular</td>
      <td>15/12/2023</td>
      <td>Dentro do prazo</td>
      <td>
        <ActionBox />
      </td>
    </StyledTr>
  );
};
