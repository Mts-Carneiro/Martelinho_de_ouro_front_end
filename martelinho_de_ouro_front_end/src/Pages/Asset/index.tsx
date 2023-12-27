import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { MainAsset } from "../../Components/MainBox";
import { StyledAssetPage } from "./styled";

export const AssetPage = () => {
  return (
    <StyledAssetPage>
      <Header />
      <NavigateBar />
      <MainAsset />
    </StyledAssetPage>
  );
};
