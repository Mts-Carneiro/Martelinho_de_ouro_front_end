import styled from "styled-components";

export const StyledDivModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: stretch;
    gap: 5px;
  }

  .div_modal_button {
    display: flex;
    justify-content: space-around;
  }
`;
