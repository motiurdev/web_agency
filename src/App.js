import Navigation from "./components/Shared/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import Login from "./components/Pages/Login/Login";
import Footer from "./components/Shared/Footer/Footer";
import Register from "./components/Pages/Login/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
