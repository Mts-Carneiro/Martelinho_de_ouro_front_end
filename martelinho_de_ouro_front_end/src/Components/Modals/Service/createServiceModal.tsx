import Modal from "react-modal";
import { StyledDivModal } from "../style";
import { useContext } from "react";
import { ServiceContext } from "../../../Context/serviceContext";
import { useForm } from "react-hook-form";
import {
  IServiceRequest,
  IServiceResolveRequest,
} from "../../../Interfaces/service.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceResolveSchema } from "../../../Schemas/Service";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "60%",
  },
};

export const ModalCreateService = () => {
  const { createServiceModal, setCreateServiceModal, createService } =
    useContext(ServiceContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IServiceResolveRequest>({
    resolver: zodResolver(serviceResolveSchema),
  });

  const setModal = () => {
    setCreateServiceModal(false);
    reset();
  };

  const submit = async (data: IServiceResolveRequest) => {
    const newData: IServiceRequest = {
      ...data,
      value: parseInt(data.value),
      delivery_date: new Date(data.delivery_date),
    };
    createService(newData);
    setModal();
  };

  return (
    <Modal isOpen={createServiceModal} style={customStyles}>
      <StyledDivModal>
        <h2>Novo Serviço</h2>
        <span onClick={() => setModal()}>X</span>

        <form onSubmit={handleSubmit(submit)}>
          <label>Prestador do Serviço</label>
          <input
            type="text"
            placeholder="Nome do prestador"
            id="enterprise"
            {...register("enterprise")}
          />
          <span>{errors.enterprise?.message}</span>

          <label>Veiculo</label>
          <input
            type="text"
            placeholder="Ex: Onix, HB20..."
            id="vehicle"
            {...register("vehicle")}
          />
          <span>{errors.vehicle?.message}</span>

          <label>Placa</label>
          <input
            type="text"
            placeholder="xxxxxxx"
            id="license_plate"
            {...register("license_plate")}
          />
          <span>{errors.license_plate?.message}</span>

          <label>Valor do Serviço</label>
          <input type="text" id="value" {...register("value")} />
          <span>{errors.value?.message}</span>

          <label>Contato</label>
          <input
            type="text"
            placeholder="(xx) x xxxx-xxxx"
            id="phone"
            {...register("phone")}
          />
          <span>{errors.phone?.message}</span>

          <label>Data de entrega</label>
          <input
            type="date"
            id="delivery_date"
            {...register("delivery_date")}
          />
          <span>{errors.delivery_date?.message}</span>

          <label>Observação</label>
          <input
            type="text"
            placeholder=""
            id="description"
            {...register("description")}
          />
          <span>{errors.description?.message}</span>

          <label>Status</label>
          <input
            type="text"
            placeholder=""
            id="status"
            {...register("status")}
          />
          <span>{errors.status?.message}</span>

          <div className="div_modal_button">
            <button type="submit">criar serviço</button>
            <button onClick={() => setModal()}>Cancelar</button>
          </div>
        </form>
      </StyledDivModal>
    </Modal>
  );
};
