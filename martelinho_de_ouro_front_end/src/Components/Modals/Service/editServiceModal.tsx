import Modal from "react-modal";
import { StyledDivModal } from "../style";
import { useContext } from "react";
import { ServiceContext } from "../../../Context/serviceContext";
import { IServiceResolveUpdate } from "../../../Interfaces/service.interface";
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

export const ModalEditService = () => {
  const { updateServiceModal, setUpdateServiceModal, updateService } =
    useContext(ServiceContext);

  const { register, handleSubmit } = useForm<IServiceResolveUpdate>();

  const update = async (data: IServiceResolveUpdate) => {
    if (!data.value) {
      const keysWithValues: any = Object.fromEntries(
        Object.entries(data).filter(([i, v]) => v !== "")
      );
      updateService(keysWithValues);
    } else if (typeof data.value === "string") {
      const newData = {
        ...data,
        value: parseInt(data.value),
      };

      const keysWithValues: any = Object.fromEntries(
        Object.entries(newData).filter(([i, v]) => v !== "")
      );

      updateService(keysWithValues);
    } else {
      console.error("O valor fornecido não é uma string.");
    }
  };

  return (
    <Modal isOpen={updateServiceModal} style={customStyles}>
      <StyledDivModal>
        <h2>Edite o Serviço</h2>

        <form onSubmit={handleSubmit(update)}>
          <label>Prestador do Serviço</label>
          <input
            type="text"
            placeholder="Nome do prestador"
            id="enterprise"
            {...register("enterprise")}
          />

          <label>Veiculo</label>
          <input
            type="text"
            placeholder="Ex: Onix, HB20..."
            id="vehicle"
            {...register("vehicle")}
          />

          <label>Placa</label>
          <input
            type="text"
            placeholder="xxxxxxx"
            id="license_plate"
            {...register("license_plate")}
          />

          <label>Valor do Serviço</label>
          <input type="text" id="value" {...register("value")} />

          <label>Contato</label>
          <input
            type="text"
            placeholder="(xx) x xxxx-xxxx"
            id="phone"
            {...register("phone")}
          />

          <label>Data de entrega</label>
          <input
            type="date"
            id="delivery_date"
            {...register("delivery_date")}
          />

          <label>Observação</label>
          <input
            type="text"
            placeholder=""
            id="description"
            {...register("description")}
          />

          <label>Status</label>
          <input
            type="text"
            placeholder=""
            id="status"
            {...register("status")}
          />

          <div className="div_modal_button">
            <button type="submit">Salvar Alterações</button>
            <button onClick={() => setUpdateServiceModal(false)}>
              Cancelar
            </button>
          </div>
        </form>
      </StyledDivModal>
    </Modal>
  );
};
