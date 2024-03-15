import Modal from "react-modal";
import { StyledDivModal } from "../style";
import { useContext } from "react";
import { LiabilityContext } from "../../../Context/liabilityContext";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "20%",
  },
};

export const ModalDeleteLiability = () => {
  const { deleteLiability, deleteLiabilityModal, setDeleteLiabilityModal } =
    useContext(LiabilityContext);

  return (
    <Modal isOpen={deleteLiabilityModal} style={customStyles}>
      <StyledDivModal>
        <h2>Você Deseja realmente apagar esta despesa?</h2>

        <div className="div_modal_button">
          <button onClick={() => deleteLiability()}>Apagar</button>
          <button onClick={() => setDeleteLiabilityModal(false)}>
            Cancelar
          </button>
        </div>
      </StyledDivModal>
    </Modal>
  );
};
