import "../-shared/components_styles/loginSignup.css";
import { UseLogin } from "./UseLogin";

export function Login() {
  const { dataLogin, errorsLogin, onLogin, onInputChangeLogin } = UseLogin();

  return (
    <div className="loginSignup-container">
      <div className="login-container">
        <h2>Login</h2>
        <form action="">
          <input
            name="usernameEmail"
            onChange={onInputChangeLogin}
            type="text"
            value={dataLogin.usernameEmail}
            placeholder="username/email
            "
          />
          <input
            name="password"
            onChange={onInputChangeLogin}
            type="password"
            value={dataLogin.password}
            placeholder="password"
          />
          <button id="login-button" onClick={onLogin}>
            Accedi
          </button>{" "}
          <h6>non hai un account?</h6>
          {/*  PER MATTEO: inserisci qui il 'Link' con 'clicca qui'
           */}{" "}
          <p>{errorsLogin.usernameEmail}</p>
          <p>{errorsLogin.password}</p>
        </form>
      </div>
    </div>
  );
}
