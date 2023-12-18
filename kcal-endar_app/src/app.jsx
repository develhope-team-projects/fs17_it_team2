import "../src/-common/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* import { Login } from "./login&signup_page/components/Login";
import { Signup } from "./login&signup_page/components/Signup"; */
import {Pazienti}  from "./doctors_dashboard/components/Pazienti";


export const App = () => {
  return (
    <div>
      <div>{/* navbar */}</div>
      {/* Componenti */}
   {/*    <Login />
      <Signup /> */}
      <Pazienti />
      <div>{/* footer */}</div>
    </div>
  );
};
