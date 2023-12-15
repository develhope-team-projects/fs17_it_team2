import Card from "react-bootstrap/Card";
import '../styles/paziente.css'

export function Paziente({email, name, surname}) {
function handlerButton() {
  //Al click si apre lo schedario del paziente
console.log(`pulsante cliccato su ${name} ${surname}`)
}

  return (
    <>
      <Card
        bsPrefix="card"
        className="card-paziente-container"
        onClick={handlerButton}
      >
        <Card.Header style={{ fontWeight: "bold", fontSize: "16px" }}>
          {email}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <h3 style={{ fontWeight: "bold", color:"grey" }}>
              {" "}
              {name} {surname}{" "}
            </h3>
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
