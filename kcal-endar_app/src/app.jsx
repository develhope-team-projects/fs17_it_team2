import { LoginSignup } from "./login&signup_page/components/LoginSignup";
import { NavbarSite } from "./navbar/NavbarSite";

export const App = () => {
  return (
    <div>
      <div><NavbarSite/></div>
      {/* Componenti */}
      <LoginSignup />
      <div>{/* footer */}</div>
    </div>
  );
};
