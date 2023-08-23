const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, username: "user1", password: "pass1" },
  { id: 2, username: "user2", password: "pass2" },
];

const secretKey = "your-secret-key";

app.use(cors());
app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
