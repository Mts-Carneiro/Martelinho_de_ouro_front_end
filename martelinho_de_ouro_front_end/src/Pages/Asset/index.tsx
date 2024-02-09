import { Header } from "../../Components/Header";
import { NavigateBar } from "../../Components/Header/NavigateBar";
import { MainAsset } from "../../Components/MainBox";
import { ModalCreateAsset } from "../../Components/Modals/Assets/createAssetModal";
import { ModalDeleteAsset } from "../../Components/Modals/Assets/deleteAssetModal";
import { ModalEditAsset } from "../../Components/Modals/Assets/editAssetModal";
import { StyledAssetPage } from "./styled";

export const AssetPage = () => {
  return (
    <>
      <ModalCreateAsset></ModalCreateAsset>
      <ModalEditAsset></ModalEditAsset>
      <ModalDeleteAsset></ModalDeleteAsset>
      <StyledAssetPage>
        <Header />
        <NavigateBar />
        <MainAsset />
      </StyledAssetPage>
    </>
  );
};
