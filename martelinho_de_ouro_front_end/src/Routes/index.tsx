import { Route, Routes } from "react-router-dom";
import { ServicePage } from "../Pages/Service";
import { EmployePage } from "../Pages/Employee";
import { AssetPage } from "../Pages/Asset";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/service" element={<ServicePage />} />
      <Route path="/" element={<AssetPage />} />
      {<Route path="/employe" element={<EmployePage />} />}
    </Routes>
  );
};
