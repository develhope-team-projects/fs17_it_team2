import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BlogPage } from "../Components/BlogPage";
import { Recipe1 } from "../Components/Recipe1";
import { Recipe2 } from "../Components/Recipe2";
import { Recipe3 } from "../Components/Recipe3";
import { Recipe4 } from "../Components/Recipe4";
import { Recipe5 } from "../Components/Recipe5";
import { Recipe6 } from "../Components/Recipe6";
import { Recipe7 } from "../Components/Recipe7";
import { Recipe8 } from "../Components/Recipe8";
import { Recipe9 } from "../Components/Recipe9";
import { Recipe10 } from "../Components/Recipe10";
import { Recipe11 } from "../Components/Recipe11";
import { Recipe12 } from "../Components/Recipe12";

export function AllRecipes() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/ricette" element={<BlogPage />} />
          <Route path="/ricette/recipe1" element={<Recipe1 />} />
          <Route path="/ricette/recipe2" element={<Recipe2 />} />
          <Route path="/ricette/recipe3" element={<Recipe3 />} />
          <Route path="/ricette/recipe4" element={<Recipe4 />} />
          <Route path="/ricette/recipe5" element={<Recipe5 />} />
          <Route path="/ricette/recipe6" element={<Recipe6 />} />
          <Route path="/ricette/recipe7" element={<Recipe7 />} />
          <Route path="/ricette/recipe8" element={<Recipe8 />} />
          <Route path="/ricette/recipe9" element={<Recipe9 />} />
          <Route path="/ricette/recipe10" element={<Recipe10 />} />
          <Route path="/ricette/recipe11" element={<Recipe11 />} />
          <Route path="/ricette/recipe12" element={<Recipe12 />} />
        </Routes>
      </div>
    </div>
  );
}
