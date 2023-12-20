import "../-shared/buttonScheda.css";
import Card from "react-bootstrap/Card";


export function ButtonScheda({ id, email, name, surname }) {
  function handlerButton() {
    //Al click si apre lo schedario del paziente
    console.log(`pulsante cliccato su ${name} ${surname}`);
  }

  return (
      <Card bsPrefix="card" className="scheda-container">
        <Card.Header className="scheda-header">{id}</Card.Header>
        <Card.Body className="scheda-body" >
          <Card.Title className="scheda-title">{name} {surname}</Card.Title>
          <Card.Text>{email}.</Card.Text>
        </Card.Body>
      </Card>
  );

 
}
