import "../-shared/components_styles/buttonScheda.css";
import Card from "react-bootstrap/Card";

export function ButtonScheda({email, name, surname, monthPlanner} ) {

 
  return (
    <Card bsPrefix="card" className="scheda-container"  >
      <Card.Header className="scheda-header">
        <img
          src="src\-assets\logo\logo.png"
          style={{ width: "var(--mini-logo)", height: "var(--mini-logo)" }}
          alt=""
        />
      </Card.Header>
      <Card.Body className="scheda-body">
        <Card.Title className="scheda-title">
          {name} {surname}
        </Card.Title>
        <Card.Text className="scheda-text" >{email || monthPlanner}</Card.Text>
      </Card.Body>
    </Card>
  );
}
