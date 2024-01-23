import {
  signupUser,
  signupDoc,
  login,
  getUsers,
  getUser,
  getDoc,
  getUserMealsPlanner,
 
  createFullMealsPlanner
} from "./controllers/content.mjs";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup/user", signupUser);
app.post("/signup/doc", signupDoc);
app.post(`/login/`, login);
app.get("/users", getUsers);
app.get("/user/:id", getUser);
app.get("/doc/:id", getDoc);
app.get("/meals/:userId", getUserMealsPlanner);
app.post("/meals/:userId", createFullMealsPlanner);


/* 
app.get("/meals/:userId/:month/:year", getFullMealsPlanner);
app.put("/meals/:userId/:month/:year", UpdateFullMealsPlanner);
app.delete("/meals/:userId/:month/:year", DeleteFullMealsPlanner);
*/
app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
