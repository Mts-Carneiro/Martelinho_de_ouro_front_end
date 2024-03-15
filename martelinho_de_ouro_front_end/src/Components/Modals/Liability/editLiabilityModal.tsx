import Modal from "react-modal";
import { StyledDivModal } from "../style";
import { LiabilityContext } from "../../../Context/liabilityContext";
import { useContext } from "react";
import { ICashOperationResolveUpdate } from "../../../Interfaces/cash_operation.interface";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "60%",
  },
};

export const ModalEditLiability = () => {
  const { updateLiability, updateLiabilityModal, setUpdateLiabilityModal } =
    useContext(LiabilityContext);

  const { register, handleSubmit, reset } =
    useForm<ICashOperationResolveUpdate>();

  const setModal = () => {
    setUpdateLiabilityModal(false);
    reset();
  };

  const update = async (data: ICashOperationResolveUpdate) => {
    if (!data.value) {
      const keysWithValues: any = Object.fromEntries(
        Object.entries(data).filter(([i, v]) => v !== "")
      );
      updateLiability(keysWithValues);
    } else if (typeof data.value === "string") {
      const newData = {
        ...data,
        value: parseInt(data.value),
      };

      const keysWithValues: any = Object.fromEntries(
        Object.entries(newData).filter(([i, v]) => v !== "")
      );

      updateLiability(keysWithValues);
    } else {
      console.error("O valor fornecido não é uma string.");
    }
  };

  return (
    <Modal isOpen={updateLiabilityModal} style={customStyles}>
      <StyledDivModal>
        <h2>Edite a despesa</h2>

        <form onSubmit={handleSubmit(update)}>
          <label>Valor</label>
          <input
            type="number"
            placeholder="R$100,00"
            id="value"
            {...register("value")}
          />

          <label>Data</label>
          <input type="date" id="date" {...register("date")} />

          <label>Nome</label>
          <input
            type="text"
            placeholder="Nome da entrada"
            id="name"
            {...register("name")}
          />

          <label>Tipo</label>
          <input
            type="text"
            placeholder="Tipo da entrada"
            id="tipe"
            {...register("tipe")}
          />

          <label>Observação</label>
          <input
            type="text"
            placeholder=""
            id="description"
            {...register("description")}
          />

          <div className="div_modal_button">
            <button type="submit">criar entrada</button>
            <button onClick={() => setModal()}>Cancelar</button>
          </div>
        </form>
      </StyledDivModal>
    </Modal>
  );
};
