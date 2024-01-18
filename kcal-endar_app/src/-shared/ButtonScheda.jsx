import "../-shared/components_styles/buttonScheda.css";
import Card from "react-bootstrap/Card";

export function ButtonScheda({email, name, surname, date}) {
/*   function handlerButton() {
    //Al click si apre lo schedario del paziente
    console.log(`pulsante cliccato su ${name} ${surname}`);
  } */

  return (
    <Card bsPrefix="card" className="scheda-container">
      <Card.Header className="scheda-header">
        <img
          src="src\-assets\logo\logo.trans.png"
          style={{ width: "var(--mini-logo)", height: "var(--mini-logo)" }}
          alt=""
        />
      </Card.Header>
      <Card.Body className="scheda-body">
        <Card.Title className="scheda-title">
          {name} {surname}
        </Card.Title>
        <Card.Text>{email}.</Card.Text>
      </Card.Body>
    </Card>
  );
}
