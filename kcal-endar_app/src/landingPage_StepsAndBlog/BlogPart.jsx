import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogPart.css";

export function BlogPart() {
  return (
    <div className="title-container">
      <Card className="stepCardBlog">
        <Card.Body>
          <Card.Title>
            PARTECIPA AL NOSTRO <span>BLOG!</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
