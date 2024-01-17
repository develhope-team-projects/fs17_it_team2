import { ContainerSchede } from "../-shared/ContainerSchede";
import { PieChart } from "./Components/PieChart";
import { UserDashboardCalendar } from "./Components/UserDashboardCalendar";

import "./Style/userDashboard.css";

export function UserDashboard() {
  return (
    <div className="user-dashboard-container">
      <div className="chart-container">
        <PieChart />
      </div>

      <ContainerSchede  />
      <UserDashboardCalendar />
    </div>
  );
}
