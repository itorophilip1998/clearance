import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import "./index.css";
import "./sass/style.scss";
import Login from "./views/Login";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Dashboard from "./views/Dashboard";
import AdminDashboard from "./views/admin/adminDashboard";
const api = "https://clerancesystem-api.herokuapp.com/api";
const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const rootElement = document.getElementById("root");
const path = window.location.pathname;
/* eslint-disable */

render(
  <BrowserRouter>
    <div id="page">
      <Header api={api} token={token} user={user} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route
          path="/login"
          element={<Login api={api} token={token} user={user} />}
        />
      </Routes>

      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard api={api} token={token} user={user} />}
        />  
      </Routes>

      <Routes>
        <Route
          path="/admin/dashboard"
          element={
            <AdminDashboard
              api={api}
              token={token}
              user={user}
              config={config}
            />
          }
        />
      </Routes>

      {path == "/" && <Footer />}
    </div>
  </BrowserRouter>,
  rootElement
);
