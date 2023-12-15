import "../styles/pazienti.css";
import { Paziente } from "./paziente";
import { useEffect, useState } from "react";

export function Pazienti() {

  //logica fetch pazienti dal database
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const utenti = [
    {
      email: "marioRossi@gmail.com",
      nome: "mario",
      cognome: "rossi",
    },
    {
      email: "marioGialli@gmail.com",
      nome: "mario",
      cognome: "Gialli",
    },
    {
      email: "marioVerdi@gmail.com",
      nome: "mario",
      cognome: "Verdi",
    },
    {
      email: "Gino@gmail.com",
      nome: "Gino",
      cognome: "Verdi",
    },
    {
      email: "AzzOhno@gmail.com",
      nome: "Azz",
      cognome: "Ohno",
    },
    {
      email: "lucablu@gmail.com",
      nome: "luca",
      cognome: "blu",
    },
    {
      email: "buco@gmail.com",
      nome: "luca",
      cognome: "blu",
    },
    {
      email: "Mingo@gmail.com",
      nome: "Mingo",
      cognome: "Mitico",
    },
    {
      email: "Riccardino@gmail.com",
      nome: "Riccardino",
      cognome: "Fuffolo",
    },
    {
      email: "facebook@gmail.com",
      nome: "facebook",
      cognome: "google",
    },
    {
      email: "Bruno@gmail.com",
      nome: "Bruno",
      cognome: "Liegi",
    },
    {
      email: "Rupert@gmail.com",
      nome: "Rupert",
      cognome: "Sciamenna",
    },
    {
      email: "giani@gmail.com",
      nome: "gianni",
      cognome: "di gianni",
    },
    {
      email: "michele@gmail.com",
      nome: "Michele",
      cognome: "de Michele",
    },
    {
      email: "Concetta@gmail.com",
      nome: "concetta",
      cognome: "Diliberto",
    },
    {
      email: "lindo@gmail.com",
      nome: "lindo",
      cognome: "Linda",
    },
    {
      email: "ahahahah@gmail.com",
      nome: "Giovanna",
      cognome: "Rosato",
    },
    {
      email: "Anselma@gmail.com",
      nome: "Anselma",
      cognome: "Maria",
    },
  ];

  return (
    <div className="item-container">
      {utenti.map((utente) => (
        <Paziente
          className="card-paziente-container"
          key={utente.email}
          email={utente.email}
          name={utente.nome}
          surname={utente.cognome}
        />
      ))}
    </div>
  );
}
