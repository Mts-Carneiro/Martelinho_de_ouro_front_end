import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { MainService } from "../../Components/MainBox";
import { StyledServicePage } from "./styled";

export const ServicePage = () => {
  return (
    <StyledServicePage>
      <Header />
      <NavigateBar />
      <MainService />
    </StyledServicePage>
  );
};
