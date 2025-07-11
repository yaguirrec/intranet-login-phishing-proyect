import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Login, Home } from "../views";

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/login/payrollNumber?" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
