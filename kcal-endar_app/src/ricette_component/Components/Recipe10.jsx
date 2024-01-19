import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Style/Recipe.css";

export function Recipe10() {
  return (
    <div>
      <Card className="cardRecipe">
        <Card.Body>
          <Card.Title className="titleRecipe">
            <h1>Salmone al Forno con Asparagi</h1>
          </Card.Title>
          <br />
          <Card.Text className="cooking">
            <h3>Ingredienti:</h3>
            <ul>
              <li>Filetti di salmone (4 pezzi)</li>
              <li>Asparagi freschi (circa 400g, punte e parte tenera)</li>
              <li>Limone (1, fette sottili)</li>
              <li>Aglio (2 spicchi, tritati)</li>
              <li>Prezzemolo fresco (1/4 di tazza, tritato)</li>
              <li>Olio d'oliva extra vergine (3 cucchiai)</li>
              <li>
                Sale e pepe q.b. Paprika (opzionale, per una nota extra di
                sapore)
              </li>
            </ul>

            <h3>Istruzioni:</h3>
            <ul>
              <li>
                <strong>Preparare il Salmone e gli Asparagi:</strong>
                <ul>
                  <li>
                    Preriscalda il forno a 200°C. Adagia i filetti di salmone su
                    una teglia foderata con carta da forno. Disponi gli asparagi
                    intorno al salmone.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Condire con Gli Ingredienti Aromatizzanti:</strong>
                <ul>
                  <li>
                    Distribuisci le fette di limone sui filetti di salmone.
                    Spargi l'aglio tritato e il prezzemolo fresco sopra il
                    salmone e gli asparagi. Puoi anche aggiungere paprika per un
                    tocco di sapore extra.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Irrorare con Olio d'Oliva:</strong>
                <ul>
                  <li>
                    Versa uniformemente l'olio d'oliva extra vergine su salmone
                    e asparagi. Assicurati che siano ben conditi per aggiungere
                    sapore e impedire che il salmone si asciughi durante la
                    cottura.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Salare e Pepare:</strong>
                <ul>
                  <li>
                    Aggiungi sale e pepe a piacere su entrambi il salmone e gli
                    asparagi.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cuocere in Forno:</strong>
                <ul>
                  <li>
                    Inforna la teglia nel forno già caldo e cuoci per circa
                    12-15 minuti, o finché il salmone è cotto e gli asparagi
                    sono teneri. Il tempo di cottura può variare a seconda dello
                    spessore del salmone.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Servire Caldo:</strong>
                <ul>
                  <li>
                    Una volta cotto, rimuovi dal forno. Servi il salmone caldo,
                    guarnendo con ulteriori erbe fresche o una spruzzata di
                    succo di limone, se desideri.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Accompagnamenti (opzionali):</strong>
                <ul>
                  <li>
                    Questo piatto si abbina bene con contorni come riso pilaf,
                    purè di patate o una fresca insalata verde.
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
