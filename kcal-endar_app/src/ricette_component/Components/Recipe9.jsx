import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Style/Recipe.css";

export function Recipe9() {
  return (
    <div>
      <Card className="cardRecipe">
        <Card.Body>
          <Card.Title className="titleRecipe">
            <h1>Pollo alla Griglia con Salsa di Yogurt alle Erbe</h1>
          </Card.Title>
          <br />
          <Card.Text className="cooking">
            <h3>Ingredienti:</h3>
            <ul>
              <li>Petto di pollo (4 pezzi)</li>
              <li>Yogurt naturale (200g)</li>
              <li>
                Erbe aromatiche fresche (prezzemolo, basilico, menta - a
                piacere)
              </li>
              <li>Aglio (1 spicchio, tritato)</li>
              <li>Succo di limone (1 cucchiaio)</li>
              <li>Olio d'oliva extra vergine (2 cucchiai)</li>
              <li>Sale e pepe q.b.</li>
            </ul>

            <h3>Istruzioni:</h3>
            <ul>
              <li>
                <strong>Preparare la Marinata:</strong>
                <ul>
                  <li>
                    In una ciotola, mescola lo yogurt naturale con le erbe
                    aromatiche fresche tritate (prezzemolo, basilico, menta),
                    l'aglio tritato, il succo di limone, l'olio d'oliva, sale e
                    pepe. Questa sarà la marinata per il pollo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Marinare il Pollo:</strong>
                <ul>
                  <li>
                    Adagia i pezzi di petto di pollo nella marinata,
                    assicurandoti che siano ben ricoperti. Lascia marinare in
                    frigorifero per almeno 30 minuti, o anche per diverse ore
                    per un sapore più intenso.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Riscaldare la Griglia:</strong>
                <ul>
                  <li>Preriscalda la griglia a temperatura media-alta.</li>
                </ul>
              </li>
              <li>
                <strong>Grigliare il Pollo:</strong>
                <ul>
                  <li>
                    Scola leggermente il pollo dalla marinata e mettilo sulla
                    griglia. Cuoci per circa 6-8 minuti per lato o finché il
                    pollo è completamente cotto e ha ottenuto una gradevole
                    doratura. Il tempo di cottura può variare a seconda dello
                    spessore del petto di pollo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Preparare la Salsa di Yogurt:</strong>
                <ul>
                  <li>
                    Mentre il pollo griglia, puoi preparare una salsa extra di
                    yogurt alle erbe mescolando yogurt rimasto con erbe tritate,
                    aglio, succo di limone, sale e pepe.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Servire:</strong>
                <ul>
                  <li>
                    Una volta che il pollo è cotto, disponilo su un piatto e
                    aggiungi la salsa di yogurt alle erbe sopra o accanto al
                    pollo. Puoi anche guarnire con erbe fresche per un tocco
                    decorativo.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Accompagnamenti (opzionali):</strong>
                <ul>
                  <li>
                    Questo pollo alla griglia con salsa di yogurt alle erbe si
                    abbina bene con contorni come insalata fresca, riso o
                    verdure grigliate.
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
