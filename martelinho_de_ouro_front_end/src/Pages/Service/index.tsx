import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { MainService } from "../../Components/MainBox";
import { ModalCreateService } from "../../Components/Modals/Service/createServiceModal";
import { ModalDeleteService } from "../../Components/Modals/Service/deleteServiceModal";
import { ModalEditService } from "../../Components/Modals/Service/editServiceModal";
import { ModalRetriveService } from "../../Components/Modals/Service/retriveModal";
import { StyledServicePage } from "./styled";

export const ServicePage = () => {
  return (
    <>
      <ModalCreateService></ModalCreateService>
      <ModalEditService></ModalEditService>
      <ModalDeleteService></ModalDeleteService>
      <ModalRetriveService></ModalRetriveService>
      <StyledServicePage>
        <Header />
        <NavigateBar />
        <MainService />
      </StyledServicePage>
    </>
  );
};
