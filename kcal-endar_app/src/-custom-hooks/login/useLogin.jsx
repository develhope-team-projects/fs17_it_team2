import { useState } from "react";

export function UseLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState({
    username: "",
    password: "",
    email: "",
  });

  function handlerInputChange(evt) {
    const { name, value } = evt.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]:
        name === "email" && value !== "" && !isValidEmail(value)
          ? `inserisci un campo ${name} valido`
          : "",
    }));
  }

  // funzione di verifica email
  const isValidEmail = (email) => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
  };

  return {
    data,
    onLogin: handlerInputChange,
    error,
  };
}
