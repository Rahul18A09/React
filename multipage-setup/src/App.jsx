import { Route, Routes } from "react-router-dom";
import About from "./assets/container/About";
import Home from "./assets/container/Home";
import ContactUs from "./assets/container/ContactUs";
import ErrorPage from "./assets/container/ErrorPage";
import Header from "./assets/components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="*" element={<ErrorPage/>} />

        </Routes>
      </div>
    </>
  );
}

export default App;
