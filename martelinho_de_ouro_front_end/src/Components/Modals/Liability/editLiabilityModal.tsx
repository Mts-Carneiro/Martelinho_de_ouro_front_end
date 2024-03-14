import Modal from "react-modal";
import { StyledDivModal } from "../style";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "60%",
  },
};

let modal = false;

export const ModalEditLiability = () => {
  return (
    <Modal isOpen={modal} style={customStyles}>
      <StyledDivModal>
        <h2>Edite sua despesa</h2>

        <form>
          <label>Valor</label>
          <input type="number" placeholder="R$100,00" />
          <span>Erro...</span>
          <label>Data</label>
          <input type="date" />
          <span>Erro...</span>
          <label>Nome</label>
          <input type="text" placeholder="Nome da despesa" />
          <span>Erro...</span>
          <label>Observação</label>
          <input type="text" placeholder="" />
          <span>Erro...</span>
        </form>

        <div className="div_modal_button">
          <button>Salvar despesa</button>
          <button>Cancelar</button>
        </div>
      </StyledDivModal>
    </Modal>
  );
};
