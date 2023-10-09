import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
