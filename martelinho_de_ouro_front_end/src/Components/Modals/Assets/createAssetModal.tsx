import Modal from "react-modal";
import { StyledDivModal } from "../style";
import { useContext } from "react";
import { AssetContext } from "../../../Context/assetsContext";
import { ICashOperationResolveRequest } from "../../../Interfaces/cash_operation.interface";
import { cashOperationResolveSchema } from "../../../Schemas/Cash_operation";
import { zodResolver } from "@hookform/resolvers/zod";
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

export const ModalCreateAsset = () => {
  const { createAssetModal, setCreateAssetModal, createAsset } =
    useContext(AssetContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICashOperationResolveRequest>({
    resolver: zodResolver(cashOperationResolveSchema),
  });

  const setModal = () => {
    setCreateAssetModal(false);
    reset();
  };

  const submit = async (data: ICashOperationResolveRequest) => {
    const newData = {
      ...data,
      value: parseInt(data.value),
      date: new Date(data.date),
    };
    createAsset(newData);
    setModal();
  };

  return (
    <Modal isOpen={createAssetModal} style={customStyles}>
      <StyledDivModal>
        <h2>Crie uma nova entrada</h2>

        <form onSubmit={handleSubmit(submit)}>
          <label>Valor</label>
          <input
            type="number"
            placeholder="R$100,00"
            id="value"
            {...register("value")}
          />
          <span>{errors.value?.message}</span>
          <label>Data</label>
          <input type="date" id="date" {...register("date")} />
          <span>{errors.date?.message}</span>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Nome da entrada"
            id="name"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
          <label>Tipo</label>
          <input
            type="text"
            placeholder="Tipo da entrada"
            id="tipe"
            {...register("tipe")}
          />
          <span>{errors.tipe?.message}</span>
          <label>Observação</label>
          <input
            type="text"
            placeholder=""
            id="description"
            {...register("description")}
          />
          <span>{errors.description?.message}</span>
          <div className="div_modal_button">
            <button type="submit">criar entrada</button>
            <button onClick={() => setModal()}>Cancelar</button>
          </div>
        </form>
      </StyledDivModal>
    </Modal>
  );
};
