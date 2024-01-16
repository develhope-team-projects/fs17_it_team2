import { Routes, Route, BrowserRouter } from "react-router-dom"
import { NavbarSite } from "./navbar/NavbarSite";
import { Homepage } from "./homepage_component/Homepage"
import { UserDashboard } from "./user-dashboard_component/UserDashboard"
import { DoctorDashboard } from "./doctor-dashboard_component/DoctorDashboard"
import { Ricette } from "./ricette_component/Ricette"
import { Login } from "./login_component/Login"
import { Footer } from "./footer/footer";
import { Signup } from "./signup_component/SignUp";

import "../src/-common/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <div>

    <NavbarSite/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/ricette" element={<Ricette />} />
      </Routes>
    </BrowserRouter>
    <Footer />

    </div>
  )
};
