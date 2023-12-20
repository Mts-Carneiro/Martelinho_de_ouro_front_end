import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { StyledEmployesPage } from "./styled";

export const EmployePage = () => {
  return (
    <StyledEmployesPage>
      <Header />
      <NavigateBar />
    </StyledEmployesPage>
  );
};
