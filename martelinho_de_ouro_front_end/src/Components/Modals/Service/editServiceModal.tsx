import Modal from "react-modal";
import { StyledModalForm, StyledDivModal } from "../style";

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

export const ModalEditService = () => {
  return (
    <Modal isOpen={modal} style={customStyles}>
      <StyledDivModal>
        <h2>Edite o Serviço</h2>

        <StyledModalForm>
          <label>Prestador do Serviço</label>
          <input type="text" placeholder="Nome do prestador" />
          <span>Erro...</span>
          <label>Veiculo</label>
          <input type="text" placeholder="Ex: Onix, HB20..." />
          <span>Erro...</span>
          <label>Plca</label>
          <input type="text" placeholder="xxxxxxx" />
          <span>Erro...</span>
          <label>Valor do Serviço</label>
          <input type="text" placeholder="R$...." />
          <span>Erro...</span>
          <label>Contato</label>
          <input type="text" placeholder="(xx) x xxxx-xxxx" />
          <span>Erro...</span>
          <label>Data de entrega</label>
          <input type="date" />
          <span>Erro...</span>
          <label>Observação</label>
          <input type="text" placeholder="" />
          <span>Erro...</span>
        </StyledModalForm>

        <div className="div_modal_button">
          <button>Salvar Alterações</button>
          <button>Cancelar</button>
        </div>
      </StyledDivModal>
    </Modal>
  );
};
