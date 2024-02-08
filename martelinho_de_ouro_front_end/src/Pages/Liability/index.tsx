import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { MainLiability } from "../../Components/MainBox";
import { ModalCreateLiability } from "../../Components/Modals/createLiabilityModal";
import { StyledLiabilityPage } from "./styled";

export const LiabilityPage = () => {
  return (
    <>
      <ModalCreateLiability></ModalCreateLiability>
      <StyledLiabilityPage>
        <Header />
        <NavigateBar />
        <MainLiability />
      </StyledLiabilityPage>
    </>
  );
};
