import {signupUser, signupDoc, login, getUsers, getUser, getDoc, } from "./controllers/users.mjs"
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());


app.post("/signup/user", signupUser);
app.post("/signup/doc", signupDoc)
app.post(`/login/`, login);
app.get('/users', getUsers)
app.get("/doc/:id", getDoc);
app.get("/user", getUser);
/* app.get("/monthPlanner", getMonthPlanner); */


app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});


