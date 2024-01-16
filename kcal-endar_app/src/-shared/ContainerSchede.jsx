import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/controller";
import "swiper/css/scrollbar";
import { ButtonScheda } from "./ButtonScheda";
/* css */
import "./components_styles/containerSchede.css";

export function ContainerSchede() {
  //logica fetch pazienti dal database
  const utenti = [
    {
      id: 1,
      email: "marioCruciani@gmail.com",
      nome: "mario",
      cognome: "cruciani",
    },
    {
      id: 2,
      email: "marioGialli@gmail.com",
      nome: "mario",
      cognome: "",
    },

    {
      id: 3,
      email: "marioVerdi@gmail.com",
      nome: "mario",
      cognome: "Verdi",
    },
    {
      id: 4,
      email: "Gino@gmail.com",
      nome: "Gino",
      cognome: "Verdi",
    },

    {
      id: 5,
      email: "AzzOhno@gmail.com",
      nome: "Azz",
      cognome: "Ohno",
    },
    {
      id: 6,
      email: "lucablu@gmail.com",
      nome: "luca",
      cognome: "blu",
    },

    {
      id: 7,
      email: "buco@gmail.com",
      nome: "luca",
      cognome: "blu",
    },
    {
      id: 8,
      email: "Mingo@gmail.com",
      nome: "Mingo",
      cognome: "Mitico",
    },

    {
      id: 9,
      email: "buco@gmail.com",
      nome: "Salvatore",
      cognome: "",
    },
    {
      id: 10,
      email: "Mingo@gmail.comfffffffffffffff",
      nome: "Mingo",
      cognome: "Mitico",
    },

    {
      id: 11,
      email: "buco@gmail.com",
      nome: "luca",
      cognome: "blu",
    },
  ];

  //funzione per calcolare quante card voglio per riga
  const cardRowIndex = 1;
  const cardForRow = [];
  for (let i = 0; i < utenti.length; i += cardRowIndex) {
    cardForRow.push(utenti.slice(i, i + cardRowIndex));
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          2540: {
            slidesPerView: 9,
          },
          1920: {
            slidesPerView: 7,
          },

          1440: {
            slidesPerView: 6,
          },

          1280: {
            slidesPerView: 5,
          },

          1000: {
            slidesPerView: 4,
          },

          600: {
            slidesPerView: 3,
          },
          480: {
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
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cardForRow.map((card, index) => (
          <SwiperSlide key={index} tag="div" slot="content-start">
            {card.map((utente) => (
              <ButtonScheda
                key={utente.email}
                email={utente.email}
                name={utente.nome}
                surname={utente.cognome}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
