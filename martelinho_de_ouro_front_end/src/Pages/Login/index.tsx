import { StyledLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="div_login">
        <h3>Login</h3>

        <form>
          <label>Email</label>
          <input type="email" placeholder="exemplo@mail.com" />

          <label>Senha</label>
          <input type="password" placeholder="********" />

          <button>Entrar</button>
        </form>

        <button>Esquci minha senha</button>
        <button>Criar Nova Conta</button>
      </div>
    </StyledLoginPage>
  );
};
