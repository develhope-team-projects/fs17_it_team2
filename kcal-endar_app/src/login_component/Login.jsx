import { Link } from "react-router-dom";

export function Login() {

  return (
    <div>
      <h1>LOGIN</h1>
      <Link to="/signup">Non hai ancora un account? Iscriviti ora!</Link>
    </div>
  )
}