import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:Matteo291199@localhost:5432/postgres");

const setupDb = async () => {
  try {
    // Creazione tabella userData
    await db.none(`
      DROP TABLE IF EXISTS userData;

      CREATE TABLE userData (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `);

    // Inserimento dati di esempio
    await db.none(`
      INSERT INTO userData (name, surname, username, email, password)
      VALUES ('Mario', 'Rossi', 'MarioRossi', 'mariorossi@gmail.com', 'abcd');
    `);

    // Creazione tabella docData
    await db.none(`
      DROP TABLE IF EXISTS docData;

      CREATE TABLE docData (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
       
      );
    `);

    // Inserimento dati di esempio
    await db.none(`
      INSERT INTO docData (name, surname, username, email, password)
      VALUES ('Luca', 'Bianchi', 'LucaBianchi', 'lucabianchi@gmail.com', 'abcd');
    `);

    console.log("Database setup completed successfully");
  } catch (error) {
    console.error("Error during database setup:", error);
  }
};

setupDb();

// verifica signup
const signupUser = async (req, res) => {

  const { name, surname, username, email, password } = req.body;
  try {
    // Seleziona i dati dalla tabella userData
    const existingUser = await db.oneOrNone(
      "SELECT * FROM userData WHERE email = $1 OR username = $2",
      [email, username]
    );
    const existingDoc = await db.oneOrNone(
      "SELECT * FROM docData WHERE email = $1 OR username = $2",
      [email, username]
    );

    // Verifica se l'utente è già presente nel database
    if (existingUser || existingDoc) {
      res.status(500).json({ message: "Utente già registrato" });
    } else {
      // Inserisci il nuovo utente nella tabella userData
      await db.none(
        `
        INSERT INTO userData (name, surname, username, email, password)
        VALUES ($1, $2, $3, $4, $5);
      `,
        [name, surname, username, email, password]
      );

      res.status(201).json({ message: "Utente aggiunto" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Errore durante la registrazione" });
  }
};

const signupDoc = async (req, res) => {

  const { name, surname, username, email, password } = req.body;
  try {
    // Seleziona i dati dalla tabella userData
    const existingDoc = await db.oneOrNone(
      "SELECT * FROM docData WHERE email = $1 OR username = $2",
      [email, username]
    );
    const existingUser = await db.oneOrNone(
      "SELECT * FROM userData WHERE email = $1 OR username = $2",
      [email, username]
    );

    // Verifica se l'utente è già presente nel database
    if (existingDoc || existingUser) {
      res.status(500).json({message: "Utente già registrato" });
    } else {
      // Inserisci il nuovo utente nella tabella userData
      await db.none(
        `
        INSERT INTO docData (name, surname, username, email, password)
        VALUES ($1, $2, $3, $4, $5);
      `,
        [name, surname, username, email, password, email]
      );

      res.status(201).json({ message: "Utente aggiunto" });
    }
  } catch (error) {
    console.error(error.message);
  }
};

// funzione di login
const login = async (req, res) => {
  let userType= null
  const { username, email, password } = req.body;

  try {
    // Cerca utente nella tabella userData
    const userData = await db.oneOrNone(
      "SELECT * FROM userData WHERE (email = $1 OR username = $2) AND password = $3",
      [email, username, password]
    );

    // Cerca dottore nella tabella docData
    const docData = await db.oneOrNone(
      "SELECT * FROM docData WHERE (email = $1 OR username = $2) AND password = $3",
      [email, username, password]
    );

    // Se l'utente è presente nel database, imposta il userType corretto
    if (userData) {
      userType = "user";
    } else if (docData) {
      userType = "doc";
    }

    // Restituisci la risposta in base al userType
    if (userType) {
      res
        .status(201)
        .json({ message: `L'utente esiste: si può loggare`, userType });
    } else {
      res
        .status(500)
        .json({ message: `L'utente NON esiste o i dati sono sbagliati` });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Errore durante la registrazione" });
  }

};

export { signupUser, signupDoc, login};
