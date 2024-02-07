import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { MainLiability } from "../../Components/MainBox";
import { StyledLiabilityPage } from "./styled";

export const LiabilityPage = () => {
  return (
    <StyledLiabilityPage>
      <Header />
      <NavigateBar />
      <MainLiability />
    </StyledLiabilityPage>
  );
};
