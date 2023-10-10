import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { StyledDashboard } from "./styled";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Header />
      <NavigateBar />
    </StyledDashboard>
  );
};
