import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminLogin from "./admin/auth/AdminLogin";
import AdminLayout from "./admin/layout/AdminLayout";
import  Dashboard  from "./admin/pages/Dashboard";
import AdminDoctors from "./admin/pages/AdminDoctors";
import ProtectedRoute from "./admin/auth/ProtectedRoute";
import { Navigate } from "react-router-dom";

function App(props) {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      />
      <Route index element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="doctors" element={<AdminDoctors/>} />
    </Routes>
  );
}

export default App;
