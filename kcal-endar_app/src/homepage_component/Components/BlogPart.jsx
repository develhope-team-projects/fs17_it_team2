import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/BlogPart.css";

export function BlogPart() {
  return (
    <div className="title-container">
      <Card className="stepCardBlog">
        <Card.Body>
          <Card.Title>
            <button className="card-blog-button">PARTECIPA AL NOSTRO <span>BLOG!</span></button>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
