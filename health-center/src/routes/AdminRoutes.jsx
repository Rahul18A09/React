import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../container/admin/pages/AdminDashboard";
import Doctors from "../container/admin/pages/Doctors";
import Appointment from "../container/admin/pages/Appointment";
import Settings from "../container/admin/pages/Settings";
import Adminlayout from "../container/admin/layouts/Adminlayout";

const AdminRoutes = () => {
  return (
    <Adminlayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Adminlayout>
  );
};

export default AdminRoutes;
