import { Route, Routes } from "react-router-dom";
import { ServicePage } from "../Pages/Service";
import { EmployePage } from "../Pages/Employee";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ServicePage />} />
      {<Route path="/employes" element={<EmployePage />} />}
    </Routes>
  );
};
