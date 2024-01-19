import pgPromise from "pg-promise";
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");
/* ----------------------------------------------------------------------------------------------*/
/* ----------------------------------------------------------------------------------------------*/
/* ----------------------------------------------------------------------------------------------*/
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

    /* ----------------------------------------------------------------------------------------------*/
    /* ----------------------------------------------------------------------------------------------*/
    /* ----------------------------------------------------------------------------------------------*/

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

    /* ----------------------------------------------------------------------------------------------*/
    /* ----------------------------------------------------------------------------------------------*/
    /* ----------------------------------------------------------------------------------------------*/

    // Creazione tabella relazionale monthPlanner users
    await db.none(`
      DROP TABLE IF EXISTS monthPlanner;
      CREATE TABLE monthPlanner (
        id SERIAL NOT NULL PRIMARY KEY,
        monthPlanner TEXT NOT NULL
        userData_id INT REFERENCES userData(id)
        docData INT REFERENCES docData(id)
      );
    `);
    // Inserimento dati di esempio
    await db.none(`
      INSERT INTO docData (monthPlanner, )
      VALUES ('meal planner gennaio');
    `);

    console.log("Database setup completed successfully");
  } catch (error) {
    console.error("Error during database setup:", error);
  }
};

setupDb();

export { db };
