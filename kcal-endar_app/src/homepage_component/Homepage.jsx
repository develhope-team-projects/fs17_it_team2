import { Link, useNavigate } from "react-router-dom";

export function Homepage() {
  const navigate = useNavigate()

  function handleLogin() {
    navigate("/login")
  }

  function handleSignUp() {
    navigate("/signup")
  }
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <button onClick={handleLogin}>Accedi</button>
      <button onClick={handleSignUp}>Registrati</button>
      <br/>
      <Link to="/ricette">Guarda le ricette!</Link>
    </div>
  )
}