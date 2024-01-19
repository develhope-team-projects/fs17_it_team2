import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Style/Recipe.css";

export function Recipe6() {
  return (
    <div>
      <Card className="cardRecipe">
        <Card.Body>
          <Card.Title className="titleRecipe">
            <h1>Sformato di Melanzane</h1>
          </Card.Title>
          <br />
          <Card.Text className="cooking">
            <h3>Ingredienti:</h3>
            <ul>
              <li>Melanzane medie (2)</li>
              <li>Pomodori maturi (4, tagliati a fette sottili)</li>
              <li>Ricotta fresca (250g)</li>
              <li>Parmigiano grattugiato (1/2 tazza)</li>
              <li>Uova (2)</li>
              <li>Aglio (2 spicchi, tritati)</li>
              <li>Basilico fresco (1/2 tazza, tritato)</li>
              <li>Olio d'oliva extra vergine (3 cucchiai)</li>
              <li>Sale e pepe q.b.</li>
            </ul>

            <h3>Istruzioni:</h3>
            <ul>
              <li>
                <strong>Preparazione delle melanzane:</strong>
                <ul>
                  <li>
                    Tagliare le melanzane a fette sottili e disporle su una
                    teglia.
                  </li>
                  <li>
                    Spolverare un po' di sale su ogni fetta di melanzana e
                    lasciarle riposare per circa 30 minuti. Questo aiuterà a
                    eliminare l'amaro.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Risciacquo delle melanzane:</strong>
                <ul>
                  <li>
                    Dopo 30 minuti, sciacquare le fette di melanzana sotto acqua
                    corrente e asciugarle delicatamente con un canovaccio.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cottura delle melanzane:</strong>
                <ul>
                  <li>
                    Spennellare le fette di melanzana con olio d'oliva e
                    grigliarle su entrambi i lati fino a quando sono morbide e
                    leggermente dorati. Metterle da parte.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Preparazione del ripieno:</strong>
                <ul>
                  <li>
                    In una ciotola, mescolare la ricotta con le uova, il
                    Parmigiano grattugiato, l'aglio tritato, il basilico fresco,
                    il sale e il pepe.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Strato dello sformato:</strong>
                <ul>
                  <li>
                    In una teglia da forno, creare uno strato di melanzane
                    grigliate sul fondo.
                  </li>
                  <li>
                    Aggiungere uno strato di fette di pomodoro sopra le
                    melanzane.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Aggiunta del ripieno:</strong>
                <ul>
                  <li>
                    Versare uniformemente il composto di ricotta sopra gli
                    strati di melanzane e pomodoro.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Ripetizione degli strati:</strong>
                <ul>
                  <li>
                    Continuare a creare strati alternati di melanzane, pomodoro
                    e ripieno fino a esaurimento degli ingredienti.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cottura:</strong>
                <ul>
                  <li>
                    Infornare lo sformato in forno preriscaldato a 180°C per
                    circa 40-45 minuti o fino a quando la superficie è dorata e
                    il ripieno è ben cotto.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Servizio:</strong>
                <ul>
                  <li>
                    Lasciare raffreddare leggermente prima di tagliare lo
                    sformato a fette. Servire caldo, magari guarnito con
                    basilico fresco.
                  </li>
                </ul>
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
