import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  height: -webkit-fill-available;
  margin-top: 17px;
  border-collapse: collapse;

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
