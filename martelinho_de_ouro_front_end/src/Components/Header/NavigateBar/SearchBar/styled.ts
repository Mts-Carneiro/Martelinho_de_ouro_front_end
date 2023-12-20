import styled from "styled-components";

export const StyledSearchBar = styled.div`
  height: 80%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  gap: 10px;

  input {
    padding: 5px 10px;
  }

  svg {
    cursor: pointer;
  }
`;
