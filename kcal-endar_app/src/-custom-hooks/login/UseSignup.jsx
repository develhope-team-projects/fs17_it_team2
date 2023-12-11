import { useState } from "react";

export function UseSignup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [invalidUsername, setInvalidUsername] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidPassword, setInvalidPassword] = useState("");

  // Funzione di verifica username
  const isValidUsername = (username) => {
    const validUSername = /^[a-zA-Z0-9_.]+$/;
    return validUSername.test(username);
  };

  // Funzione di verifica email
  const isValidEmail = (email) => {
    const validEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    return validEmail.test(email);
  };

  // Funzione di verifica password
  const isValidPassword = (password) => {
    const validPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return validPass.test(password);
  };

  // funzione digitazione input
  function handlerChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // funzione al click sul button
  const handlerBtn = (evt) => {
    evt.preventDefault();
    const { username, email, password } = data;
    console.log(data);

    if (username !== "" && !isValidUsername(username)) {
      setInvalidUsername(() =>
        "L'username non può contenere caratteri speciali (es:£, $, %, &, *, @)");
      console.log(invalidUsername);
    }

    if (email !== "" && !isValidEmail(email)) {
      setInvalidEmail(() => "Inserisci un'email valida");
      console.log(invalidEmail);
    }

    if (password !== "" && !isValidPassword(password)) {
      setInvalidPassword(() => 
        "La password deve contenere almeno 8 caratteri, tra cui un numero e un carattere speciale");
      console.log(invalidPassword);
    }
  };

  return {
    data,
    invalidUsername,
    invalidEmail,
    invalidPassword,
    onSignup: handlerBtn,
    onInputChange: handlerChange,
  };
}
