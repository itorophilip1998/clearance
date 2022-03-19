import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
// import Footer from "./layouts/Footer";
// import { Header } from "./layouts/Header";
// import Home from "./views/home"; 
const rootElement = document.getElementById("root");
render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
 
 
  </BrowserRouter>,
  rootElement
);
