import { TitleCompany } from "./Title";
import { HeaderComponent } from "./styles";

export const Header = () => {
  return (
    <HeaderComponent>
      <h3>logo</h3>
      <TitleCompany />
      <h2>Gestor de Serviços</h2>
      <h3>Perfil</h3>
    </HeaderComponent>
  );
};
