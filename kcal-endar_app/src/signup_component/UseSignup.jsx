import { useState } from "react";

export function UseSignup() {
  const [dataSignup, setDataSignup] = useState({
    nome: "",
    cognome: "",
    username: "",
    email: "",
    password: "",
  });

  const [errorsSignup, setErrorsSignup] = useState({
    invalidUsername: "",
    invalidEmail: "",
    invalidPassword: "",
    invalidName: "",
    invalidSurname: "",
  });

  const regexPatterns = {
    alpha: /^[a-zA-Z]/,
    alphanumeric: /^[a-zA-Z0-9_.]+$/,
    email: /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
    password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
  };

  const isValid = (value, regex) => regex.test(value);

  function handlerChange(e) {
    const { name, value } = e.target;
    setDataSignup((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    value === "" ? setErrorsSignup({}) : "";
  }

  const handlerBtn = (evt) => {
    evt.preventDefault();
    const { nome, cognome, username, email, password } = dataSignup;

    setErrorsSignup({
      invalidUsername:
        username && !isValid(username, regexPatterns.alphanumeric)
          ? "ATTENZIONE: L'username non può contenere caratteri speciali (es:£, $, %, &, *, @)"
          : "",
      invalidEmail:
        email && !isValid(email, regexPatterns.email)
          ? "ATTENZIONE: Inserisci un'email valida"
          : "",
      invalidPassword:
        password && !isValid(password, regexPatterns.password)
          ? "ATTENZIONE: inserisci una password valida"
          : "",
      invalidName:
        nome && !isValid(nome, regexPatterns.alpha)
          ? "ATTENZIONE: Il nome non può contenere numeri e caratteri speciali (es:£, $, %, &, *, @)"
          : "",
      invalidSurname:
        cognome && !isValid(cognome, regexPatterns.alpha)
          ? "ATTENZIONE: Il cognome non può contenere numeri e caratteri speciali (es:£, $, %, &, *, @)"
          : "",
    });
  };

  return {
    dataSignup,
    errorsSignup,
    onSignup: handlerBtn,
    onInputChangeSignup: handlerChange,
  };
}
