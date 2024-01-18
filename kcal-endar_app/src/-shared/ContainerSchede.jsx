import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/controller";
import "swiper/css/scrollbar";
import { ButtonScheda } from "./ButtonScheda";
import axios from "axios";
import { useEffect, useState } from "react";

/* css */
import "./components_styles/containerSchede.css";

export function ContainerSchede() {
  const [users, setUsers] = useState([]);
  const [cardForRow, setCardForRow] = useState([]);

  //logica fetch pazienti dal database
 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get("http://localhost:3000/users");
       const cardRowIndex = 1;
       const cards = [];
       for (let i = 0; i < response.data.length; i += cardRowIndex) {
         cards.push(response.data.slice(i, i + cardRowIndex));
       }
       setCardForRow(cards);
          
       setUsers(response.data);
     } catch (error) {
       console.error(error.message, ": Errore durante la richiesta");
     }
   };

   fetchData();
 }, []);
 console.log(users);

  //funzione per calcolare quante card voglio per riga

  return (
    <>
      {users.length >0 && (
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
          {cardForRow.map((card) => (
            <SwiperSlide key={card[0].email} tag="div" slot="content-start">
              {card.map((utente) => (
                <ButtonScheda
                  key={utente.email}
                  email={utente.email}
                  name={utente.name}
                  surname={utente.surname}
                />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
