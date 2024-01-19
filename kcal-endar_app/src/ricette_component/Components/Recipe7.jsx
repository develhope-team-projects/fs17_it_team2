import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Style/Recipe.css";

export function Recipe7() {
  return (
    <div>
      <Card className="cardRecipe">
        <Card.Body>
          <Card.Title className="titleRecipe">
            <h1>Insalata di Ceci con Verdure Mediterranee</h1>
          </Card.Title>
          <br />
          <Card.Text className="cooking" >
            <h3>Ingredienti:</h3>
            <ul>
              <li>Ceci cotti (circa 200g)</li>
              <li>Melanzane (150g)</li>
              <li>Pomodorini (150g)</li>
              <li>Peperoni (150g)</li>
              <li>Cetriolini sott'aceto (100g)</li>
              <li>Foglie di basilico fresco</li>
              <li>Olio d'oliva extra vergine</li>
              <li>Aceto balsamico</li>
              <li>Sale e pepe q.b.</li>
            </ul>

            <h3>Istruzioni:</h3>
            <ul>
              <li>
                <strong>Preparazione dei Ceci:</strong>
                <ul>
                  <li>
                    Usa ceci già cotti (circa 200g) o cuocili seguendo le
                    istruzioni sulla confezione, se necessario.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Preparazione delle Verdure:</strong>
                <ul>
                  <li>Taglia le melanzane (150g) a cubetti.</li>
                </ul>
                <ul>
                  <li>
                    Taglia i pomodorini (150g) a metà o quarti, a seconda delle
                    dimensioni.
                  </li>
                </ul>
                <ul>
                  <li>Taglia le melanzane (150g) a cubetti.</li>
                </ul>
                <ul>
                  <li>Taglia le melanzane (150g) a cubetti.</li>
                </ul>
              </li>
              <li>
                <strong>Cottura delle Verdure:</strong>
                <ul>
                  <li>
                    In una padella, scalda un po' di olio d'oliva extra vergine.
                  </li>
                </ul>
                <ul>
                  <li>
                    Aggiungi le melanzane e cuocile finché sono morbide e
                    leggermente dorati.
                  </li>
                </ul>
                <ul>
                  <li>
                    Aggiungi i pomodorini e i peperoni e continua la cottura per
                    alcuni minuti, mantenendo le verdure croccanti.
                  </li>
                </ul>
                <ul>
                  <li>Lascia raffreddare le verdure.</li>
                </ul>
              </li>
              <li>
                <strong>Preparazione dell'Insalata:</strong>
                <ul>
                  <li>
                    In una grande ciotola, unisci i ceci cotti, le verdure cotte
                    e i cetriolini tagliati. Aggiungi foglie di basilico fresco
                    a piacere.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Condimento:</strong>
                <ul>
                  <li>
                    Condisci l'insalata con olio d'oliva extra vergine, aceto
                    balsamico, sale e pepe a gusto.
                  </li>
                  <li>
                    Mescola bene tutti gli ingredienti in modo che il condimento
                    si distribuisca uniformemente.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Servizio:</strong>
                <ul>
                  <li>
                    Lascia riposare l'insalata in frigorifero per un po' prima
                    di servirla, in modo che i sapori si amalgamino.
                  </li>
                </ul>
                <ul>
                  <li>
                    Servi l'Insalata di Ceci con Verdure Mediterranee come
                    antipasto o accompagnamento leggero.
                  </li>
                </ul>
                <ul>
                  <li>
                    Puoi guarnire con ulteriori foglie di basilico fresco prima
                    di servire.
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
