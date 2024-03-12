import Modal from "react-modal";
import { StyledDivModal } from "../style";
import { useContext } from "react";
import { ServiceContext } from "../../../Context/serviceContext";
import { format } from "date-fns";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "60%",
  },
};

export const ModalRetriveService = () => {
  const { setRetriveServiceModal, retriveServiceModal, service } =
    useContext(ServiceContext);

  const setModal = () => {
    setRetriveServiceModal(false);
  };

  return (
    <Modal isOpen={retriveServiceModal} style={customStyles}>
      <StyledDivModal>
        <h2>Serviço</h2>
        <span onClick={() => setModal()}>X</span>

        <div>
          <h4>Placa: {service?.license_plate}</h4>
          <h4>Veiculo: {service?.vehicle}</h4>
          <h4>Empresa: {service?.enterprise}</h4>
          <h4>Contato: {service?.phone}</h4>
          <h4>Status: {service?.status}</h4>
          <h4>Valor: R$ {service?.value},00</h4>

          <h4>
            Data de entrega:{" "}
            {service && service.delivery_date
              ? format(new Date(service.delivery_date), "dd/MM/yyyy")
              : "Data não disponível"}
          </h4>
          <h4>Descrição: {service?.description}</h4>
        </div>
      </StyledDivModal>
    </Modal>
  );
};
