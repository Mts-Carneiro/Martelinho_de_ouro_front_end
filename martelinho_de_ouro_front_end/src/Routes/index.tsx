import { Route, Routes } from "react-router-dom";
import { ServicePage } from "../Pages/Service";
import { EmployePage } from "../Pages/Employee";
import { AssetPage } from "../Pages/Asset";
import { LiabilityPage } from "../Pages/Liability";
import { LoginPage } from "../Pages/Login";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/asset" element={<AssetPage />} />
      <Route path="/" element={<LiabilityPage />} />
      {<Route path="/employe" element={<EmployePage />} />}
    </Routes>
  );
};
