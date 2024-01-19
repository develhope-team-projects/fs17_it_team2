import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Style/Recipe.css";

export function Recipe5() {
  return (
    <div>
      <Card className="cardRecipe">
        <Card.Body>
          <Card.Title className="titleRecipe">
            <h1>Zuppa di Lenticchie e Verdure</h1>
          </Card.Title>
          <br />
          <Card.Text className="cooking">
            <h3>Ingredienti:</h3>
            <ul>
              <li>Lenticchie secche (200g)</li>
              <li>Cipolla (1, tritata)</li>
              <li>Carote (2, a cubetti)</li>
              <li>Sedano (2 gambi, a cubetti)</li>
              <li>Pomodori a cubetti (400g, preferibilmente pelati)</li>
              <li>Brodo vegetale (1,5 litri)</li>
              <li>Aglio (2 spicchi, tritati)</li>
              <li>Olio d'oliva extra vergine (2 cucchiai)</li>
              <li>Rosmarino fresco (1 rametto)</li>
              <li>Timo secco (1 cucchiaino)</li>
              <li>Sale e pepe q.b.</li>
            </ul>

            <h3>Istruzioni:</h3>
            <ul>
              <li>
                <strong>Preparare le Lenticchie:</strong>
                <ul>
                  <li>Lavare le lenticchie sotto acqua corrente e scolarle.</li>
                </ul>
              </li>
              <li>
                <strong>Soffriggere gli Aromi:</strong>
                <ul>
                  <li>
                    In una pentola capiente, scaldare l'olio d'oliva. Aggiungere
                    la cipolla, l'aglio, le carote e il sedano. Soffriggere a
                    fuoco medio fino a quando le verdure sono appena tenere.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Aggiungere Pomodori e Lenticchie:</strong>
                <ul>
                  <li>
                    Aggiungere i pomodori a cubetti e le lenticchie alla
                    pentola. Mescolare bene.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Versare il Brodo:</strong>
                <ul>
                  <li>
                    Versare il brodo vegetale nella pentola. Aggiungere il
                    rosmarino e il timo. Portare la zuppa a ebollizione, quindi
                    ridurre il calore e far cuocere a fuoco lento.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cuocere a Fuoco Lento:</strong>
                <ul>
                  <li>
                    Lasciare cuocere la zuppa a fuoco lento per circa 25-30
                    minuti o finché le lenticchie sono tenere. Aggiustare sale e
                    pepe secondo il proprio gusto.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Servire Caldo:</strong>
                <ul>
                  <li>
                    Rimuovere il rosmarino e servire la zuppa calda. Puoi
                    aggiungere un filo d'olio d'oliva e pepe fresco al momento
                    di servire.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Accompagnamenti (opzionali):</strong>
                <ul>
                  <li>
                    Servi la zuppa con crostini di pane tostato o una spruzzata
                    di succo di limone per un tocco di freschezza.
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
