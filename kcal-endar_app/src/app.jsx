import "../src/-common/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DoctorDashboard } from "./doctors_dashboard/components/DoctorDashboard";

/* import { Login } from "./login&signup_page/components/Login";
import { Signup } from "./login&signup_page/components/Signup"; */

export const App = () => {
  return (
    <div>
      <div>{/* navbar */}</div>
      {/* Componenti */}
      {/*    <Login />
      <Signup /> */}
      <DoctorDashboard />
      <div>{/* footer */}</div>
    </div>
  );
};
