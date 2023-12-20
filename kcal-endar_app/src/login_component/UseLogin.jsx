import { useState } from "react";

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
      invalidUsername: //inserire condizione
      !usernameEmail? "L'username o l'email non esistono" : '',
      invalidPassword: //inserire condizione
      !password? 'password non corretta' : '' ,
    });
  };

  return {
    dataLogin,
    errorsLogin,
    onLogin: handlerBtn,
    onInputChangeLogin: handlerChange,
  };
}
