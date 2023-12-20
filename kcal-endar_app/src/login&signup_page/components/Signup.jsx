import "../styles/LoginSignup.css";
import { UseSignup } from "../custom-hooks/UseSignup";

export function Signup() {
  const { dataSignup, errorsSignup, onSignup, onInputChangeSignup } =
    UseSignup();
  return (
    <div className="loginSignup-container">
      <div className="signup-container">
        <h2>Registrati</h2>
        <form action="">
          <div className="double-inp-signup-container">
            <div className="label-inp-signup-container">
              <input
                name="nome"
                onChange={onInputChangeSignup}
                type="text"
                value={dataSignup.nome}
                placeholder="nome"
              />
            </div>
            <input
              name="cognome"
              onChange={onInputChangeSignup}
              type="text"
              value={dataSignup.cognome}
              placeholder="cognome"
            />
          </div>
          <div className="double-inp-signup-container">
            <input
              name="username"
              onChange={onInputChangeSignup}
              type="text"
              value={dataSignup.username}
              placeholder="username"
            />

            <input
              name="email"
              onChange={onInputChangeSignup}
              type="text"
              value={dataSignup.email}
              placeholder="email"
            />
          </div>
          <input
            name="password"
            onChange={onInputChangeSignup}
            type="password"
            value={dataSignup.password}
            placeholder="password"
          />{" "}
          <p id="password-reminder-text">
            La password deve contenere almeno 8 caratteri tra cui un numero e un
            carattere speciale
          </p>
          <button id="signup-button" onClick={onSignup}>
            Registrati
          </button>{" "}
        </form>
        <p className="signup-error-message">{errorsSignup.invalidName}</p>
        <p className="signup-error-message">{errorsSignup.invalidSurname}</p>
        <p className="signup-error-message">{errorsSignup.invalidUsername}</p>
        <p className="signup-error-message">{errorsSignup.invalidEmail}</p>
        <p className="signup-error-message">{errorsSignup.invalidPassword}</p>
      </div>
    </div>
  );
}