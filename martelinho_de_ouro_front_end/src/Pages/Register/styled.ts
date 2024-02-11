import styled from "styled-components";

export const StyledRegisterPage = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  align-items: center;

  .div_register {
    width: 40%;
    height: 60%;
    min-height: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: beige;
    border-radius: 60px;
    padding: 15px 0px;

    form {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      input {
        margin-bottom: 20px;
        padding: 4px;
      }
    }
  }
`;
