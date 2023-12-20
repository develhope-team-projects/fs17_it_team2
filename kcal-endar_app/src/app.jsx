import { NavbarSite } from "./navbar/NavbarSite";
import "../src/-common/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./login&signup_page/components/Login";
import { Signup } from "./login&signup_page/components/Signup";
import { Footer } from "./footer/footer";


export const App = () => {
  return (
    <div>
      <NavbarSite/>
      <Login />
      <Signup />
      <Footer />
    </div>
  );
};
