import styled from "styled-components";

export const StyledTable = styled.table`
  width: 90%;
  height: -webkit-fill-available;
  margin-top: 50px;
  border-collapse: collapse; // Isso garante que as bordas sejam colapsadas

  td,
  th {
    border-bottom: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f5f5f5;
    }

    tr:nth-child(odd) {
      background-color: #fff;
    }
  }
`;
