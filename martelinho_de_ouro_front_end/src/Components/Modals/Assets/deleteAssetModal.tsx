import Modal from "react-modal";
import { StyledDivModal } from "../style";
import { useContext } from "react";
import { AssetContext } from "../../../Context/assetsContext";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "20%",
  },
};

export const ModalDeleteAsset = () => {
  const { deleteAsset, deleteAssetModal, setDeleteAssetModal } =
    useContext(AssetContext);

  return (
    <Modal isOpen={deleteAssetModal} style={customStyles}>
      <StyledDivModal>
        <h2>Você Deseja realmente apagar esta entrada?</h2>

        <div className="div_modal_button">
          <button onClick={() => deleteAsset()}>Apagar</button>
          <button onClick={() => setDeleteAssetModal(false)}>Cancelar</button>
        </div>
      </StyledDivModal>
    </Modal>
  );
};
