import express from "express";
import cors from "cors";
import {signupUser, signupDoc, login } from "./controllers/users.mjs"
const app = express();
app.use(cors());
app.use(express.json());


app.post("/signup/user", signupUser);
app.post("/signup/doc", signupDoc)
app.post(`/login/`, login);

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});


