const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://pdarchibald:mlarchibald@cluster0-vdsoz.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "FYI";

app.use(express.json());
app.use(cors());

let person = [{ name: "parker" }];

app.get("/", (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection("users");
    console.log("Connected successfully to server");
    collection.find({}).toArray((err, docs) => {
      res.send(docs);
    });
  });
});

app.post("/", (req, res) => {
  if(req.body.password === req.body.confirm) {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db(dbName);
        const collection = db.collection("users");
        collection.insertMany([
          {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          }
        ]);
        client.close();
        res.send("Added user");
      });
  }
  else {
      res.send("Passwords do not match");
  }
});

//app.put

//app.delete

app.listen(port, () => console.log(`Listening on port ${port}!`));
