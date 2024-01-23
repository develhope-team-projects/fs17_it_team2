import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BlogPage } from "../Components/BlogPage";
import { Recipe } from "../Components/Recipe";


export function AllRecipes() {
  const recipesData = [
    {
      title: "Insalata di Ceci con Verdure Mediterranee",
      ingredients: [
        "Ceci cotti (circa 200g)",
        "Melanzane (150g)",
        "Pomodorini (150g)",
        "Peperoni (150g)",
        "Cetriolini sott'aceto (100g)",
        "Foglie di basilico fresco",
        "Olio d'oliva extra vergine",
        "Aceto balsamico",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Usa ceci già cotti (circa 200g) o cuocili seguendo le istruzioni sulla confezione, se necessario.",
        "Taglia le melanzane (150g) a cubetti.",
        "Taglia i pomodorini (150g) a metà o quarti, a seconda delle dimensioni.",
        "In una padella, scalda un po' di olio d'oliva extra vergine.",
        "Aggiungi le melanzane e cuocile finché sono morbide e leggermente dorati.",
        "Aggiungi i pomodorini e i peperoni e continua la cottura per alcuni minuti, mantenendo le verdure croccanti.",
        "Lascia raffreddare le verdure.",
        "In una grande ciotola, unisci i ceci cotti, le verdure cottem i cetriolini tagliati efoglie di basilico.",
        "Condisci l'insalata con olio d'oliva extra vergine, aceto balsamico, sale e pepe a gusto.",
        "Mescola bene tutti gli ingredienti in modo che il condimento si distribuisca uniformemente.",
        "Lascia riposare l'insalata in frigorifero per un po' prima di servirla, in modo che i sapori si amalgamino. ",
        "Servi l'Insalata di Ceci con Verdure Mediterranee come antipasto o accompagnamento leggero.",
        "Puoi guarnire con ulteriori foglie di basilico fresco prima di servire.",
      ],
    },
    {
      title: "Insalata di Quinoa con Verdure Grigliate",
      ingredients: [
        "200g di quinoa",
        "300g di verdure miste (zucchine, peperoni, pomodori)",
        "Olio d'oliva",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Cuoci 200g di quinoa seguendo le istruzioni sulla confezione (circa 15-20 minuti di cottura)",
        "Lava bene la quinoa prima della cottura se non è già stata prerisciacquata.",
        "Taglia 300g di verdure miste a cubetti.",
        "Puoi utilizzare zucchine, peperoni, pomodori o altre verdure di tua scelta.",
        "In una padella o sulla griglia, riscalda un filo d'olio d'oliva.",
        "Aggiungi le verdure tagliate nella padella o sulla griglia e cuocile fino a quando sono grigliate e leggermente tenere.",
        "In una ciotola grande, mescola le verdure grigliate con la quinoa cotta.",
        "Condisci la miscela con olio d'oliva, sale e pepe secondo i tuoi gusti e mescola bene",
        "Puoi servire questa quinoa con verdure grigliate come contorno leggero o come piatto principale.",
      ],
    },
    {
      title: "Pollo alla Griglia con Salsa di Yogurt alle Erbe",
      ingredients: [
        "Petto di pollo (4 pezzi)",
        "Yogurt naturale (200g)",
        "Erbe aromatiche fresche (prezzemolo, basilico, menta - a piacere)",
        "Aglio (1 spicchio, tritato)",
        "Succo di limone (1 cucchiaio)",
        "Olio d'oliva extra vergine (2 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "In una ciotola, mescola lo yogurt con prezzemolo, basilico, menta, aglio tritato, succo di limone, olio d'oliva, sale e pepe.",
        "Adagia i pezzi di petto di pollo nella marinata, assicurandoti che siano ben ricoperti.",
        "Lascia marinare in frigorifero per almeno 30 minuti, o anche per diverse ore per un sapore più intenso.",
        "Preriscalda la griglia a temperatura media-alta.",
        "Scola leggermente il pollo dalla marinata e mettilo sulla griglia.",
        "Cuoci per circa 6-8 minuti per lato o finché il pollo è completamente cotto e ha ottenuto una gradevole doratura",
        "Prepara una salsa di yogurt alle erbe mescolandolo con erbe tritate, aglio, succo di limone, sale e pepe.",
        "Una volta che il pollo è cotto, disponilo su un piatto e aggiungi la salsa di yogurt alle erbe sopra o accanto al pollo.",
        "Questo pollo alla griglia con salsa di yogurt alle erbe si abbina bene con contorni come insalata fresca, riso o verdure grigliate.",
      ],
    },

    {
      title: "Salmone al Forno con Asparagi",
      ingredients: [
        "Filetti di salmone (4 pezzi)",
        "Asparagi freschi (circa 400g, punte e parte tenera)",
        "Limone (1, fette sottili)",
        "Aglio (2 spicchi, tritati)",
        "Prezzemolo fresco (1/4 di tazza, tritato)",
        "Olio d'oliva extra vergine (3 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Preriscalda il forno a 200°C.",
        "Adagia i filetti di salmone su una teglia foderata con carta da forno.",
        "Disponi gli asparagi intorno al salmone.",
        "Distribuisci le fette di limone,l'aglio tritato e il prezzemolo fresco sopra il salmone e gli asparagi.",
        "Versa uniformemente l'olio d'oliva extra vergine su salmone e asparagi.",
        "Aggiungi sale e pepe a piacere su entrambi il salmone e gli asparagi.",
        "Inforna la teglia nel forno già caldo e cuoci per circa 12-15 minuti, o finché il salmone è cotto e gli asparagi sono teneri.",
        "Una volta cotto, rimuovi dal forno.",
        "Servi il salmone caldo, guarnendo con ulteriori erbe fresche o una spruzzata di succo di limone",
        "Questo piatto si abbina bene con contorni come riso pilaf,purè di patate o una fresca insalata verde.",
      ],
    },

    {
      title: "Zuppa di Lenticchie e Verdure",
      ingredients: [
        "Lenticchie secche (200g)",
        "Cipolla (1, tritata)",
        "Carote (2, a cubetti)",
        "Sedano (2 gambi, a cubetti)",
        "Pomodori a cubetti (400g, preferibilmente pelati)",
        "Brodo vegetale (1,5 litri)",
        "Aglio (2 spicchi, tritati)",
        "Olio d'oliva extra vergine (2 cucchiai)",
        "Rosmarino fresco (1 rametto)",
        "Timo secco (1 cucchiaino)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Lavare le lenticchie sotto acqua corrente e scolarle.",
        "In una pentola capiente, scaldare l'olio d'oliva e aggiungere la cipolla, l'aglio, le carote e il sedano.",
        "Soffriggere a fuoco medio fino a quando le verdure sono appena tenere.",
        "Aggiungere i pomodori a cubetti e le lenticchie alla pentola e mescolare bene.",
        "Versare il brodo vegetale nella pentola e aggiungere il rosmarino e il timo. Portare la zuppa a ebollizione, quindi ridurre il calore e far cuocere a fuoco lento.",
        "Lasciare cuocere la zuppa a fuoco lento per circa 25-30 minuti o finché le lenticchie sono tenere. Aggiustare sale e pepe secondo il proprio gusto.",
        "Rimuovere il rosmarino e servire la zuppa calda. Puoi aggiungere un filo d'olio d'oliva e pepe fresco al momento di servire.",
        "Servi la zuppa con crostini di pane tostato o una spruzzata di succo di limone per un tocco di freschezza.",
      ],
    },

    {
      title: "Sformato di Melanzane",
      ingredients: [
        "Melanzane medie (2)",
        "Pomodori maturi (4, tagliati a fette sottili)",
        "Ricotta fresca (250g)",
        "Parmigiano grattugiato (1/2 tazza)",
        "Uova (2)",
        "Basilico fresco (1/2 tazza, tritato)",
        "Aglio (2 spicchi, tritati)",
        "Olio d'oliva extra vergine (3 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Tagliare le melanzane a fette sottili e disporle su una teglia.",
        "Spolverare un po' di sale su ogni fetta di melanzana e lasciarle riposare per circa 30 minuti. Questo aiuterà a eliminare l'amaro.",
        "Dopo 30 minuti, sciacquare le fette di melanzana sotto acqua corrente e asciugarle delicatamente con un canovaccio.",
        "Spennellare le fette di melanzana con olio d'oliva e grigliarle su entrambi i lati fino a quando sono morbide e leggermente dorati. Metterle da parte.",
        "In una ciotola, mescolare la ricotta con le uova, il Parmigiano grattugiato, l'aglio tritato, il basilico fresco, il sale e il pepe.",
        "In una teglia da forno, creare uno strato di melanzane grigliate sul fondo.",
        "Aggiungere uno strato di fette di pomodoro sopra le melanzane.",
        "Versare uniformemente il composto di ricotta sopra gli strati di melanzane e pomodoro.",
        "Continuare a creare strati alternati di melanzane, pomodoro e ripieno fino a esaurimento degli ingredienti.",
        "Infornare lo sformato in forno preriscaldato a 180°C per circa 40-45 minuti o fino a quando la superficie è dorata e il ripieno è ben cotto.",
        "Lasciare raffreddare leggermente prima di tagliare lo sformato a fette. Servire caldo, magari guarnito con basilico fresco.",
      ],
    },

    {
      title: "Insalata di Ceci con Verdure Mediterranee",
      ingredients: [
        "Ceci cotti (circa 200g)",
        "Melanzane (150g)",
        "Pomodorini (150g)",
        "Peperoni (150g)",
        "Cetriolini sott'aceto (100g)",
        "Foglie di basilico fresco",
        "Olio d'oliva extra vergine",
        "Aceto balsamico",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Usa ceci già cotti (circa 200g) o cuocili seguendo le istruzioni sulla confezione, se necessario.",
        "Taglia le melanzane (150g) a cubetti.",
        "Taglia i pomodorini (150g) a metà o quarti, a seconda delle dimensioni.",
        "In una padella, scalda un po' di olio d'oliva extra vergine.",
        "Aggiungi le melanzane e cuocile finché sono morbide e leggermente dorati.",
        "Aggiungi i pomodorini e i peperoni e continua la cottura per alcuni minuti, mantenendo le verdure croccanti.",
        "Lascia raffreddare le verdure.",
        "In una grande ciotola, unisci i ceci cotti, le verdure cotte e i cetriolini tagliati. Aggiungi foglie di basilico fresco a piacere.",
        "Condisci l'insalata con olio d'oliva extra vergine, aceto balsamico, sale e pepe a gusto.",
        "Mescola bene tutti gli ingredienti in modo che il condimento si distribuisca uniformemente.",
        "Lascia riposare l'insalata in frigorifero per un po' prima di servirla, in modo che i sapori si amalgamino. ",
        "Servi l'Insalata di Ceci con Verdure Mediterranee come antipasto o accompagnamento leggero.",
        "Puoi guarnire con ulteriori foglie di basilico fresco prima di servire.",
      ],
    },
    {
      title: "Insalata di Quinoa con Verdure Grigliate",
      ingredients: [
        "200g di quinoa",
        "300g di verdure miste (zucchine, peperoni, pomodori)",
        "Olio d'oliva",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Cuoci 200g di quinoa seguendo le istruzioni sulla confezione. Di solito, la quinoa richiede circa 15-20 minuti di cottura. Lava bene la quinoa prima della cottura se non è già stata prerisciacquata.",
        "Taglia 300g di verdure miste a cubetti.",
        "Puoi utilizzare zucchine, peperoni, pomodori o altre verdure di tua scelta. In una padella o sulla griglia, riscalda un filo d'olio d'oliva.",
        "Aggiungi le verdure tagliate nella padella o sulla griglia e cuocile fino a quando sono grigliate e leggermente tenere. Puoi regolare il grado di cottura in base alle tue preferenze personali.",
        "In una ciotola grande, mescola le verdure grigliate con la quinoa cotta.",
        "Condisci la miscela con olio d'oliva, sale e pepe secondo i tuoi gusti. Mescola bene in modo che gli ingredienti siano uniformemente distribuiti.",
        "Puoi servire questa quinoa con verdure grigliate come contorno leggero o come piatto principale. È versatile e può essere gustata calda o a temperatura ambiente.",
      ],
    },
    {
      title: "Pollo alla Griglia con Salsa di Yogurt alle Erbe",
      ingredients: [
        "Petto di pollo (4 pezzi)",
        "Yogurt naturale (200g)",
        "Erbe aromatiche fresche (prezzemolo, basilico, menta - a piacere)",
        "Aglio (1 spicchio, tritato)",
        "Succo di limone (1 cucchiaio)",
        "Olio d'oliva extra vergine (2 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "In una ciotola, mescola lo yogurt naturale con le erbe aromatiche fresche tritate (prezzemolo, basilico, menta), l'aglio tritato, il succo di limone, l'olio d'oliva, sale e pepe. Questa sarà la marinata per il pollo.",
        "Adagia i pezzi di petto di pollo nella marinata, assicurandoti che siano ben ricoperti. Lascia marinare in frigorifero per almeno 30 minuti, o anche per diverse ore per un sapore più intenso.",
        "Preriscalda la griglia a temperatura media-alta.",
        "Scola leggermente il pollo dalla marinata e mettilo sulla griglia. Cuoci per circa 6-8 minuti per lato o finché il pollo è completamente cotto e ha ottenuto una gradevole doratura. Il tempo di cottura può variare a seconda dello spessore del petto di pollo.",
        "Mentre il pollo griglia, puoi preparare una salsa extra di yogurt alle erbe mescolando yogurt rimasto con erbe tritate, aglio, succo di limone, sale e pepe.",
        "Una volta che il pollo è cotto, disponilo su un piatto e aggiungi la salsa di yogurt alle erbe sopra o accanto al pollo. Puoi anche guarnire con erbe fresche per un tocco decorativo.",
        "Questo pollo alla griglia con salsa di yogurt alle erbe si abbina bene con contorni come insalata fresca, riso o verdure grigliate.",
      ],
    },

    {
      title: "Salmone al Forno con Asparagi",
      ingredients: [
        "Filetti di salmone (4 pezzi)",
        "Asparagi freschi (circa 400g, punte e parte tenera)",
        "Limone (1, fette sottili)",
        "Aglio (2 spicchi, tritati)",
        "Prezzemolo fresco (1/4 di tazza, tritato)",
        "Olio d'oliva extra vergine (3 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Preriscalda il forno a 200°C. Adagia i filetti di salmone su una teglia foderata con carta da forno. Disponi gli asparagi intorno al salmone.",
        "Distribuisci le fette di limone sui filetti di salmone.Spargi l'aglio tritato e il prezzemolo fresco sopra il salmone e gli asparagi. Puoi anche aggiungere paprika per un tocco di sapore extra.",
        "Versa uniformemente l'olio d'oliva extra vergine su salmone e asparagi. Assicurati che siano ben conditi per aggiungere sapore e impedire che il salmone si asciughi durante la cottura.",
        "Aggiungi sale e pepe a piacere su entrambi il salmone e gli asparagi.",
        "Inforna la teglia nel forno già caldo e cuoci per circa 12-15 minuti, o finché il salmone è cotto e gli asparagi sono teneri. Il tempo di cottura può variare a seconda dello spessore del salmone.",
        "Una volta cotto, rimuovi dal forno. Servi il salmone caldo, guarnendo con ulteriori erbe fresche o una spruzzata di succo di limone, se desideri.",
        "Questo piatto si abbina bene con contorni come riso pilaf,purè di patate o una fresca insalata verde.",
      ],
    },

    {
      title: "Zuppa di Lenticchie e Verdure",
      ingredients: [
        "Lenticchie secche (200g)",
        "Cipolla (1, tritata)",
        "Carote (2, a cubetti)",
        "Sedano (2 gambi, a cubetti)",
        "Pomodori a cubetti (400g, preferibilmente pelati)",
        "Brodo vegetale (1,5 litri)",
        "Aglio (2 spicchi, tritati)",
        "Olio d'oliva extra vergine (2 cucchiai)",
        "Rosmarino fresco (1 rametto)",
        "Timo secco (1 cucchiaino)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Lavare le lenticchie sotto acqua corrente e scolarle.",
        "In una pentola capiente, scaldare l'olio d'oliva. Aggiungere la cipolla, l'aglio, le carote e il sedano. Soffriggere a fuoco medio fino a quando le verdure sono appena tenere.",
        "Aggiungere i pomodori a cubetti e le lenticchie alla pentola. Mescolare bene.",
        "Versare il brodo vegetale nella pentola. Aggiungere il rosmarino e il timo. Portare la zuppa a ebollizione, quindi ridurre il calore e far cuocere a fuoco lento.",
        "Lasciare cuocere la zuppa a fuoco lento per circa 25-30 minuti o finché le lenticchie sono tenere. Aggiustare sale e pepe secondo il proprio gusto.",
        "Rimuovere il rosmarino e servire la zuppa calda. Puoi aggiungere un filo d'olio d'oliva e pepe fresco al momento di servire.",
        "Servi la zuppa con crostini di pane tostato o una spruzzata di succo di limone per un tocco di freschezza.",
      ],
    },

    {
      title: "Sformato di Melanzane",
      ingredients: [
        "Melanzane medie (2)",
        "Pomodori maturi (4, tagliati a fette sottili)",
        "Ricotta fresca (250g)",
        "Parmigiano grattugiato (1/2 tazza)",
        "Uova (2)",
        "Basilico fresco (1/2 tazza, tritato)",
        "Aglio (2 spicchi, tritati)",
        "Olio d'oliva extra vergine (3 cucchiai)",
        "Sale e pepe q.b.",
      ],
      instructions: [
        "Tagliare le melanzane a fette sottili e disporle su una teglia.",
        "Spolverare un po' di sale su ogni fetta di melanzana e lasciarle riposare per circa 30 minuti. Questo aiuterà a eliminare l'amaro.",
        "Dopo 30 minuti, sciacquare le fette di melanzana sotto acqua corrente e asciugarle delicatamente con un canovaccio.",
        "Spennellare le fette di melanzana con olio d'oliva e grigliarle su entrambi i lati fino a quando sono morbide e leggermente dorati. Metterle da parte.",
        "In una ciotola, mescolare la ricotta con le uova, il Parmigiano grattugiato, l'aglio tritato, il basilico fresco, il sale e il pepe.",
        "In una teglia da forno, creare uno strato di melanzane grigliate sul fondo.",
        "Aggiungere uno strato di fette di pomodoro sopra le melanzane.",
        "Versare uniformemente il composto di ricotta sopra gli strati di melanzane e pomodoro.",
        "Continuare a creare strati alternati di melanzane, pomodoro e ripieno fino a esaurimento degli ingredienti.",
        "Infornare lo sformato in forno preriscaldato a 180°C per circa 40-45 minuti o fino a quando la superficie è dorata e il ripieno è ben cotto.",
        "Lasciare raffreddare leggermente prima di tagliare lo sformato a fette. Servire caldo, magari guarnito con basilico fresco.",
      ],
    },
  ];

  return (
    <div>
      <div>
        <Routes>
          <Route path="/ricette" element={<BlogPage />} />
          {recipesData.map((recipe, index) => (
            <Route
              key={index}
              path={`/ricette/recipe${index + 1}`}
              element={<Recipe {...recipe} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}
