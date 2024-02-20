import Modal from "react-modal";
import { StyledModalForm, StyledDivModal } from "../style";
import { useContext } from "react";
import { ServiceContext } from "../../../Context/serviceContext";
import { useForm } from "react-hook-form";
import { IServiceRequest } from "../../../Interfaces/service.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceSchema } from "../../../Schemas/Service";

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

  const setModal = () => {
    setCreateServiceModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IServiceRequest>({ resolver: zodResolver(serviceSchema) });

  const newServiceSubmit = (data: IServiceRequest) => {
    const newData = {
      ...data,
      status: "Aprovado",
    };
    console.log(newData);
    createService(data);
    setModal();
  };

  return (
    <Modal isOpen={createServiceModal} style={customStyles}>
      <StyledDivModal>
        <h2>Novo Serviço</h2>
        <span onClick={() => setModal()}>X</span>

        <StyledModalForm onSubmit={handleSubmit(newServiceSubmit)}>
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
            id="licensePlate"
            {...register("license_plate")}
          />
          <span>{errors.license_plate?.message}</span>

          <label>Valor do Serviço</label>
          <input
            type="text"
            placeholder="R$...."
            id="value"
            {...register("value")}
          />
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
          <input type="date" id="deliveryDate" {...register("delivery_date")} />
          <span>{errors.delivery_date?.message}</span>

          <label>Observação</label>
          <input
            type="text"
            placeholder=""
            id="description"
            {...register("description")}
          />
          <span>{errors.description?.message}</span>

          <div className="div_modal_button">
            <button type="submit">criar serviço</button>
            <button onClick={() => setModal()}>Cancelar</button>
          </div>
        </StyledModalForm>
      </StyledDivModal>
    </Modal>
  );
};
