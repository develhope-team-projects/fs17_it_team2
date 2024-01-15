import { useState } from "react";
import axios from "axios";

export function UseLogin() {
  const [dataLogin, setDataLogin] = useState({
    usernameEmail: "",
    password: "",
  });

  const [errorsLogin, setErrorsLogin] = useState({
    invalidUsernameEmail: "",
    invalidPassword: "",
  });

  function handlerChange(e) {
    const { name, value } = e.target;
    setDataLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handlerBtn = (evt) => {
    evt.preventDefault();
    const { usernameEmail, password } = dataLogin;

    setErrorsLogin({
      invalidUsername: !usernameEmail
        ? "L'username o l'email non esistono"
        : "",
      invalidPassword: !password ? "password non corretta" : "",
    });

    if (dataLogin) {
      try {
        axios
          .post("http://localhost:3000/login", dataLogin)
          .then((res) => console.log(res.data));
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return {
    dataLogin,
    errorsLogin,
    onLogin: handlerBtn,
    onInputChangeLogin: handlerChange,
  };
}
