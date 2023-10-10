import { TitleCompany } from "./Title";
import { HeaderComponent } from "./styles";
import { GrHomeRounded } from "react-icons/gr";
import { BiSolidUserRectangle } from "react-icons/bi";

export const Header = () => {
  return (
    <HeaderComponent>
      <div className="home">
        <GrHomeRounded />
        <TitleCompany />
      </div>
      <h2>Gestor de Serviços</h2>
      <BiSolidUserRectangle />
    </HeaderComponent>
  );
};
