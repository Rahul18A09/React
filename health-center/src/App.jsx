import Footer from "./components/Footer";
import Header from "./components/Header";
import UserRoutes from "./routes/UserRoutes";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";




function App() {
  return (
    <>
      <Header />
      <UserRoutes />
      <Footer />
      {/* <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes> */}
    </>
  );
}

export default App;
