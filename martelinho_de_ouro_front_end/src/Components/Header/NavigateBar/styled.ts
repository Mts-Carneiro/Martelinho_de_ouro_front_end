import styled from "styled-components";

export const StyledNavBar = styled.div`
  background-color: #f4f4f4;
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  box-shadow: 0px 5px 10px rgb(199 199 199 / 50%);

  .page_list {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 430px;

    p {
      cursor: pointer;
    }
    p:hover {
      font-weight: bolder;
    }
  }
`;
