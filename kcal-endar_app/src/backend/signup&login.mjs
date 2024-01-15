import express from "express";
import cors from "cors";
import {signupUser, loginUser} from "./controllers/users.mjs"
const app = express();
app.use(cors());

app.use(express.json());


app.post("/signup", signupUser);
app.post("/login", loginUser);

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});


