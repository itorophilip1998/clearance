import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage"; 
import './index.css'
import './sass/style.scss'
import Login from "./views/Login";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Dashboard from "./views/Dashboard";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>

    <div id="page">
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  </BrowserRouter>,
  rootElement
);
