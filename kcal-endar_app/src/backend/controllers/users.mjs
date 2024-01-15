const db = {
  usersData: [
    {
      id: 1,
      name: "Mario",
      surname: "Rossi",
      username: "username",
      email: "mariorossi@gmail.com",
      password: "abcd",
    },
  ],
  docData: [
    {
      id: 2,
      name: "Luca",
      surname: "Bianchi",
      username: "username2",
      email: "lucabianchi@gmail.com",
      password: "1234",
    },
  ],
};
// verifica signup
const signupUser = (req, res) => {
  const { name, surname, username, email, password } = req.body;

  // Verifica se l'utente è già presente nel database
  const toCheckUsers = db.usersData.find(
    (user) => user.email === email || user.username === username
  );

  const toCheckDoc = db.docData.find(
    (doc) => doc.email === email || doc.username === username
  );

  if (toCheckUsers || toCheckDoc) {
    res.status(500).json({ message: "Utente già registrato" });
  } else {
    const newUser = { name, surname, username, email, password };
    db.usersData = [...db.usersData, newUser];
    db.docData = [...db.docData, newUser];
    res.status(201).json({ message: "Utente aggiunto" });
  }
};

// verifica login
const loginUser = (req, res) => {
  const { username, email, password } = req.body;

  // Verifica se l'utente è già presente nel database
  const toCheckLoggedUsers = db.usersData.find(
    (user) =>
      user.email === email ||
      (user.username === username && user.password === password)
  );
  const toCheckLoggedDoc = db.docData.find(
    (doc) =>
      doc.email === email ||
      (doc.username === username && doc.password === password)
  );

  if (toCheckLoggedUsers || toCheckLoggedDoc) {
    res.status(201).json({ msg: "l'utente esiste: si può loggare" });
  } else {
    res.status(500).json({ message: "l'utente NON esiste" });
  }
};

export { signupUser, loginUser };
