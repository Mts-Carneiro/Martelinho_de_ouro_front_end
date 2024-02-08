import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { MainLiability } from "../../Components/MainBox";
import { ModalCreateLiability } from "../../Components/Modals/Liability/createLiabilityModal";
import { ModalDeleteLiability } from "../../Components/Modals/Liability/deleteLiabilityModal";
import { ModalEditLiability } from "../../Components/Modals/Liability/editLiabilityModal";
import { StyledLiabilityPage } from "./styled";

export const LiabilityPage = () => {
  return (
    <>
      <ModalCreateLiability></ModalCreateLiability>
      <ModalEditLiability></ModalEditLiability>
      <ModalDeleteLiability></ModalDeleteLiability>
      <StyledLiabilityPage>
        <Header />
        <NavigateBar />
        <MainLiability />
      </StyledLiabilityPage>
    </>
  );
};
