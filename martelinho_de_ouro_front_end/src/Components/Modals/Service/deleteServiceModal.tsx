import Modal from "react-modal";
import { StyledDivModal } from "../style";
import { useContext } from "react";
import { ServiceContext } from "../../../Context/serviceContext";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "20%",
  },
};

export const ModalDeleteService = () => {
  const { setDeleteServiceModal, deleteServiceModal, deleteService } =
    useContext(ServiceContext);

  return (
    <Modal isOpen={deleteServiceModal} style={customStyles}>
      <StyledDivModal>
        <h2>Você Deseja realmente apagar esta serviço?</h2>

        <div className="div_modal_button">
          <button onClick={() => deleteService()}>Apagar</button>
          <button onClick={() => setDeleteServiceModal(false)}>Cancelar</button>
        </div>
      </StyledDivModal>
    </Modal>
  );
};
