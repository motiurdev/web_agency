import Navigation from "./components/Shared/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import Login from "./components/Pages/Login/Login";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
