import { useForm } from "react-hook-form";
import { ILogin } from "../../Interfaces/user.interface";
import { loginSchema } from "../../Schemas/User";
import { StyledLoginPage } from "./style";
import { AuthContext, iLogin } from "../../Context/AuthContext";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  const submit = (data: iLogin) => {
    loginUser(data);
  };

  const { loginUser } = useContext(AuthContext);

  return (
    <StyledLoginPage>
      <div className="div_login">
        <h3>Login</h3>

        <form onSubmit={handleSubmit(submit)}>
          <label>Email</label>
          <input
            type="email"
            placeholder="exemplo@mail.com"
            {...register("email")}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="********"
            {...register("password")}
          />

          <button type="submit">Entrar</button>
        </form>

        <button>Esquci minha senha</button>
        <button>Criar Nova Conta</button>
      </div>
    </StyledLoginPage>
  );
};
