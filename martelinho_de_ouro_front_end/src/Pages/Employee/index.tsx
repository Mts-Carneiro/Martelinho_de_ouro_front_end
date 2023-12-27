import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { MainEmployees } from "../../Components/MainBox";
import { StyledEmployesPage } from "./styled";

export const EmployePage = () => {
  return (
    <StyledEmployesPage>
      <Header />
      <NavigateBar />
      <MainEmployees />
    </StyledEmployesPage>
  );
};
