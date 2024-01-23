import { Link } from "react-router-dom";
import { AllRecipes } from "../ricette_component/Components/AllRecipes";

export function Ricette() {
  return (
    <div>
      <Link to="/ricette">
      </Link>
      <AllRecipes />
    </div>
  );
}
