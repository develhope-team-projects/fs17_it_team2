import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

export function UseLogin() {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorsLogin, setErrorsLogin] = useState({
    invalidUsernameEmail: "",
    invalidPassword: "",
  });

  const navigateLogin = useNavigate()

  function handlerChange(e) {
    const { name, value } = e.target;
    setDataLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }


  const handlerBtn = (evt) => {
    evt.preventDefault();
    const { email, password } = dataLogin;

    setErrorsLogin({
      invalidUsernameEmail:!email
        ? "l'email non esiste"
        : "",
      invalidPassword: !password ? "password non corretta" : "",
    });

    if ( email && password) {
      const apiUrl = `http://localhost:3000/login`;
      axios
        .post(apiUrl, dataLogin)
        .then((res) => {
          console.log(res.data.message);

          // Verifica il tipo di utente (user o medico) e reindirizza di conseguenza
          const userType = res.data.userType;

          if (userType === "user") {
            navigateLogin("/user-dashboard");
          } else if (userType === "doc") {
            navigateLogin("/doctor-dashboard");
          } else {
            console.error(res.data.message);
          }
        })
        .catch((error) => {
          if (error.response) {
            // La richiesta è stata effettuata e il server ha risposto con uno stato diverso da 2xx
            console.error("Errore lato server:", error.response.data.message);
          } else if (error.request) {
            // La richiesta è stata effettuata, ma non è stata ricevuta alcuna risposta
            console.error("Nessuna risposta dal server");
          } else {
            // Altri tipi di errori
            console.error("Errore durante la richiesta:", error.message);
          }
        });

    }
  };


  return {
    dataLogin,
    errorsLogin,
    onLogin: handlerBtn,
    onInputChangeLogin: handlerChange,
  };
}
