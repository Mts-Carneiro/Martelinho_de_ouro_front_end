import { Route, Routes } from "react-router-dom";
import { ServicePage } from "../Pages/Service";
import { EmployePage } from "../Pages/Employee";
import { AssetPage } from "../Pages/Asset";
import { LiabilityPage } from "../Pages/Liability";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/service" element={<ServicePage />} />
      <Route path="/asset" element={<AssetPage />} />
      <Route path="/" element={<LiabilityPage />} />
      {<Route path="/employe" element={<EmployePage />} />}
    </Routes>
  );
};
