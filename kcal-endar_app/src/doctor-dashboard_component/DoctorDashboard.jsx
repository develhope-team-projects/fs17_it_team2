import { ContainerSchedeDoc } from "./components/ContainerSchedeDoc";
import {UserDashboardCalendar} from "../user-dashboard_component/Components/UserDashboardCalendar"
import "./style/DoctorDashboard.css";

export const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard-container">
      <ContainerSchedeDoc />
      <UserDashboardCalendar />
    </div>
  );
};
