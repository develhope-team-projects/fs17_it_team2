import { useState } from "react";
import axios from "axios";

export function UseSignup() {
  const [dataSignup, setDataSignup] = useState({
    name: "",
    surname: "",
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

  const handlerBtn = async (evt) => {
    evt.preventDefault();
    const { name, surname, username, email, password } = dataSignup;

    const newError = {
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
        name && !isValid(name, regexPatterns.alpha)
          ? "ATTENZIONE: Il nome non può contenere numeri e caratteri speciali (es:£, $, %, &, *, @)"
          : "",
      invalidSurname:
        surname && !isValid(surname, regexPatterns.alpha)
          ? "ATTENZIONE: Il cognome non può contenere numeri e caratteri speciali (es:£, $, %, &, *, @)"
          : "",
    };
    setErrorsSignup(newError);
    const areData = Object.values(dataSignup).every((value) => value !== "");
    const noErrors = Object.values(errorsSignup).every((value) => value === "");

    // verifica se input sono digitati correttamente
    if (areData && noErrors) {

      try {
       const res = await axios.post("http://localhost:3000/signup", dataSignup)
       console.log(res.data)
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return {
    dataSignup,
    errorsSignup,
    onSignup: handlerBtn,
    onInputChangeSignup: handlerChange,
  };
}
