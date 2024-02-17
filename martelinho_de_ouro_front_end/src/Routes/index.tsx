import { Route, Routes } from "react-router-dom";
import { ServicePage } from "../Pages/Service";
import { EmployePage } from "../Pages/Employee";
import { AssetPage } from "../Pages/Asset";
import { LiabilityPage } from "../Pages/Liability";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./ProtectedRoutes";

export const RouterMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/service" element={<ServicePage />} />
        <Route path="/asset" element={<AssetPage />} />
        <Route path="/liability" element={<LiabilityPage />} />
        <Route path="/employe" element={<EmployePage />} />
      </Route>
    </Routes>
  );
};
