const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://Daniel070793:olidk100@ds119395.mlab.com:19395/todo",
  (error, db) => {
    if (error) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    db.collection("Users").find()

    db.close();
  }
);
