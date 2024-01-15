import { Routes, Route, BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import { NavbarSite } from "./navbar/NavbarSite";
import {Homepage} from "./homepage_component/Homepage"
import {UserDashboard} from "./user-dashboard_component/UserDashboard"
import {DoctorDashboard} from "./doctor-dashboard_component/DoctorDashboard"
import {Ricette} from "./ricette_component/Ricette"
import { Login } from "./login_component/Login"
import { SignUp } from "./signup_component/SignUp"
import { Footer } from "./footer/footer";
import { PieChart } from "./pie-chart/PieChart"
import "../src/-common/global.css";

export const App = () => {
  return (
    <div>
    <NavbarSite/>
    <PieChart/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/ricette" element={<Ricette />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
};
