import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import ContactUs from "./container/ContactUs";
import ErrorPage from "./container/ErrorPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
