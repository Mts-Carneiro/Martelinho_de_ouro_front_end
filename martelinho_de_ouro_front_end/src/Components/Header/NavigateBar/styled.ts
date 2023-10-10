import styled from "styled-components";

export const StyledNavBar = styled.div`
  background-color: #f4f4f4;
  height: 26px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);

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
