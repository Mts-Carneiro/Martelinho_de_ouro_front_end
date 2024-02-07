import styled from "styled-components";

export const StyledMainBox = styled.div`
  width: 95vw;
  height: 100vh;
  background-color: white;
  margin-top: 110px;
  border-radius: 18px;
  box-shadow: 0px 0px 10px rgb(199 199 199 / 50%);
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 25px;

  .table_div {
    width: 90%;
    height: -webkit-fill-available;
    overflow-y: auto;

    .table_div_add_button {
      display: flex;
      justify-content: flex-end;
    }
  }

  .options_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding-bottom: 10px;

    .options_filter {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      h6 {
        border-radius: 15px;
        background-color: beige;
        padding: 7px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
`;
