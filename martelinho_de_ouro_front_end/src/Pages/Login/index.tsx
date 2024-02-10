import { StyledLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div>
        <h3>Login</h3>

        <form>
          <label>Email</label>
          <input type="email" placeholder="exemplo@mail.com" />

          <label>Senha</label>
          <input type="password" />

          <button>Entrar</button>
        </form>

        <button>Criar sua conta</button>
      </div>
    </StyledLoginPage>
  );
};
