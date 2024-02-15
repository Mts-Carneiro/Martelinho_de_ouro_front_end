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
    width: 475px;

    p {
      cursor: pointer;
      position: relative;
      display: inline-block;
      text-decoration: none;
      color: #333;
    }
    p:hover {
      font-weight: bolder;
    }

    .underline::before,
    .underline::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #333;
      transition: width 0.3s ease;
    }

    .underline::before {
      left: 0;
    }

    .underline::after {
      right: 0;
    }

    .underline:hover::before,
    .underline:hover::after {
      width: 50%;
    }
  }
`;
