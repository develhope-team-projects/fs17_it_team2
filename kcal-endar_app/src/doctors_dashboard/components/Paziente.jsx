import "../styles/paziente.css";
export function Paziente({ email, name, surname }) {
  function handlerButton() {
    //Al click si apre lo schedario del paziente
    console.log(`pulsante cliccato su ${name} ${surname}`);
  }

  return (
    <>
      <div className="paziente-card-container">
        <div className="imgAndText-container">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
            className="paziente-img-container"
            alt=""
          />
          <div className="nameSurname-container">
            <span className="nameSurnameEmail">
              {name} <span className="nameSurnameEmail"> {surname}</span>
            </span>
            <span className="nameSurnameEmail">{email}</span>
          </div>
        </div>
      </div>
    </>
  );
}
