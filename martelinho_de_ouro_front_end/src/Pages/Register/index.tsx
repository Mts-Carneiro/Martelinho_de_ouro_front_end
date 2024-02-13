import { useContext, useState } from "react";
import { StyledRegisterPage } from "./styled";
import { useForm } from "react-hook-form";
import { IUserRequest } from "../../Interfaces/user.interface";
import { userSchema } from "../../Schemas/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../Context/AuthContext";

export const RegisterPage = () => {
  const [cnpj, setCnpj] = useState("");

  const mascaraCNPJ = (valor: string) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
    valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
    return valor;
  };

  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    const valorFormatado = mascaraCNPJ(valor);
    setCnpj(valorFormatado);
  };

  const [telefone, setTelefone] = useState("");

  const mascaraTelefone = (valor: string) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(mascaraTelefone(event.target.value));
  };

  const { register, handleSubmit } = useForm<IUserRequest>({
    resolver: zodResolver(userSchema),
  });

  const submit = (data: IUserRequest) => {
    registerUser(data);
  };

  const { registerUser } = useContext(AuthContext);

  return (
    <StyledRegisterPage>
      <div className="div_register">
        <h3>Crie sua conta</h3>

        <form onSubmit={handleSubmit(submit)}>
          <label>Email</label>
          <input
            type="email"
            placeholder="exemplo@mail.com"
            {...register("email")}
          />

          <label>Nome Fantasia</label>
          <input
            type="text"
            placeholder="Empresa Fantasia"
            {...register("trading_name")}
          />

          <label>CNPJ</label>
          <input
            type="text"
            //value={cnpj}
            //onChange={handleCnpjChange}
            maxLength={18}
            placeholder="xx.xxx.xxx/xxxx-xx"
            {...register("CNPJ")}
          />

          <label>Telefone</label>
          <input
            type="text"
            //value={telefone}
            //onChange={handleTelefoneChange}
            maxLength={15}
            placeholder="(xx) x xxxx-xxxx"
            {...register("phone")}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="********"
            {...register("password")}
          />

          <label>Confirme sua senha</label>
          <input type="password" placeholder="********" />

          <button type="submit">Criar conta</button>
        </form>

        <button>Já possuo uma conta</button>
      </div>
    </StyledRegisterPage>
  );
};
