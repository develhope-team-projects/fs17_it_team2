import "../src/-common/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DoctorDashboard } from "./doctors_dashboard/DoctorDashboard";

export const App = () => {
  return (
    <div>
      <div>{/* navbar */}</div>

      <DoctorDashboard />
      <div>{/* footer */}</div>
    </div>
  );
};
