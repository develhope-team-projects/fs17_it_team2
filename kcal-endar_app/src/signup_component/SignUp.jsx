import { Link } from "react-router-dom";

export function SignUp() {

  return (
    <div>
      <h1>SIGN UP</h1>
      <Link to="/login">Hai già un account? Accedi ora!</Link>
    </div>
  )
}