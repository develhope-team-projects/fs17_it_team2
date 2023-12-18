import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/pazienti.css";
import { Paziente } from "./paziente";
import "swiper/css/bundle";
import "swiper/css/controller";
import "swiper/css/scrollbar";

export function Pazienti() {
  //logica fetch pazienti dal database
  const utenti = [
    {
      email: "dddddddddddddddddddddddddddddddddddd..l.com",
      nome: "mario",
      cognome: "Costainto cruciani",
    },
    {
      email: "marioGialli@gmail.com",
      nome: "mario",
      cognome: "",
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
      email: "buco@gmail.com",
      nome: "Salvatore",
      cognome: "",
    },
    {
      email: "Mingo@gmail.com",
      nome: "Mingo",
      cognome: "Mitico",
    },

    {
      email: "buco@gmail.com",
      nome: "luca",
      cognome: "blu",
    },
  ];

  //funzione per calcolare quante card voglio per riga
  const cardRowIndex = 2;
  const cardForRow = [];
  for (let i = 0; i < utenti.length; i += cardRowIndex) {

    cardForRow.push(utenti.slice(i, i + cardRowIndex));
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          1920: {
            slidesPerView: 5,
          },

          1100: {
            slidesPerView: 3,
          },

          1000: {
            slidesPerView: 3,
          },

          600: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },

          0: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={0}
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cardForRow.map((card, index) => (
          <SwiperSlide key={index} tag="div" slot="content-start">
            {card.map((utente) => (
              <Paziente

                key={utente.email}
                email={utente.email}
                name={utente.nome}
                surname={utente.cognome}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}
