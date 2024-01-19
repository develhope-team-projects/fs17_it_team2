import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Style/Recipe.css";

export function Recipe8() {
  return (
    <div>
      <Card className="cardRecipe">
        <Card.Body>
          <Card.Title className="titleRecipe">
            <h1>Insalata di Quinoa con Verdure Grigliate</h1>
          </Card.Title>
          <br />
          <Card.Text className="cooking">
            <h3>Ingredienti:</h3>
            <ul>
              <li>200g di quinoa</li>
              <li>300g di verdure miste (zucchine, peperoni, pomodori)</li>
              <li>Olio d'oliva</li>
              <li>Sale e pepe q.b.</li>
            </ul>

            <h3>Istruzioni:</h3>
            <ul>
              <li>
                <strong>Cuocere la Quinoa:</strong>
                <ul>
                  <li>
                    Cuoci 200g di quinoa seguendo le istruzioni sulla
                    confezione. Di solito, la quinoa richiede circa 15-20 minuti
                    di cottura. Lava bene la quinoa prima della cottura se non è
                    già stata prerisciacquata.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Preparare le Verdure:</strong>
                <ul>
                  <li>Taglia 300g di verdure miste a cubetti.</li>
                </ul>
                <ul>
                  <li>
                    Puoi utilizzare zucchine, peperoni, pomodori o altre verdure
                    di tua scelta. In una padella o sulla griglia, riscalda un
                    filo d'olio d'oliva.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Grigliare le Verdure:</strong>
                <ul>
                  <li>
                    Aggiungi le verdure tagliate nella padella o sulla griglia e
                    cuocile fino a quando sono grigliate e leggermente tenere.
                    Puoi regolare il grado di cottura in base alle tue
                    preferenze personali.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Mescolare con la Quinoa:</strong>
                <ul>
                  <li>
                    In una ciotola grande, mescola le verdure grigliate con la
                    quinoa cotta.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Condire:</strong>
                <ul>
                  <li>
                    Condisci la miscela con olio d'oliva, sale e pepe secondo i
                    tuoi gusti. Mescola bene in modo che gli ingredienti siano
                    uniformemente distribuiti.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Servire:</strong>
                <ul>
                  <li>
                    Puoi servire questa quinoa con verdure grigliate come
                    contorno leggero o come piatto principale. È versatile e può
                    essere gustata calda o a temperatura ambiente.
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
