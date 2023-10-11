import styled from "styled-components";

export const HeaderComponent = styled.div`
  background-color: #fff889;
  color: black;
  height: 5vh;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  .home {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    width: 255px;
  }

  .menu_click {
    cursor: pointer;
  }

  .perfil {
    width: 2em;
    height: 2em;
  }
`;
