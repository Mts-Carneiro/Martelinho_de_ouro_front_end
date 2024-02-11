import { useState } from "react";
import { StyledRegisterPage } from "./styled";

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
    setCnpj(mascaraCNPJ(event.target.value));
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

  return (
    <StyledRegisterPage>
      <div className="div_register">
        <h3>Crie sua conta</h3>

        <form>
          <label>Email</label>
          <input type="email" placeholder="exemplo@mail.com" />

          <label>Nome Fantasia</label>
          <input type="text" placeholder="Empresa Fantasia" />

          <label>CNPJ</label>
          <input
            type="text"
            value={cnpj}
            onChange={handleCnpjChange}
            maxLength={18}
            placeholder="xx.xxx.xxx/xxxx-xx"
          />

          <label>Telefone</label>
          <input
            type="text"
            value={telefone}
            onChange={handleTelefoneChange}
            maxLength={15}
            placeholder="(xx) x xxxx-xxxx"
          />

          <label>Senha</label>
          <input type="password" placeholder="********" />

          <label>Confirme sua senha</label>
          <input type="password" placeholder="********" />

          <button>Criar conta</button>
        </form>

        <button>Já possuo uma conta</button>
      </div>
    </StyledRegisterPage>
  );
};
