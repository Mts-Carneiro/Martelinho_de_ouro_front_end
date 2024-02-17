import Modal from "react-modal";
import { StyledDivModal } from "../style";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "20%",
  },
};

let modal = false;

export const ModalDeleteService = () => {
  return (
    <Modal isOpen={modal} style={customStyles}>
      <StyledDivModal>
        <h2>Você Deseja realmente apagar esta serviço?</h2>

        <div className="div_modal_button">
          <button>Apagar</button>
          <button>Cancelar</button>
        </div>
      </StyledDivModal>
    </Modal>
  );
};
