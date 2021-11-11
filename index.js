const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(" WOw  helloor hooooo !Hello World!");
});

const users = [
  { id: 0, name: "saban", email: "sabana@gmail", phone: "012w928939293" },
  { id: 1, name: "saban", email: "sabana@gmail", phone: "012w928939293" },
  { id: 2, name: "saban", email: "sabana@gmail", phone: "012w928939293" },
  { id: 3, name: "sa32ban", email: "sabana@gmail", phone: "012w928939293" },
  { id: 4, name: "saweban", email: "sabana@gmail", phone: "012w928939293" },
  { id: 5, name: "sayban", email: "sabana@gmail", phone: "012w928939293" },
  { id: 6, name: "sawban", email: "sabana@gmail", phone: "012w928939293" },
  { id: 7, name: "sarban", email: "sabana@gmail", phone: "012w928939293" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users", (req, res) => {
  // use query
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("it is hitting post method", req.body);
  //res.send(JSON.stringify(newUser));
  res.json(newUser);
});

//dynamic paremter
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("yami yami fazli");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
