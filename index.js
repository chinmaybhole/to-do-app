import express from "express";
import Connection from "./database/db.js"; //Including extensions in node module is compulsory whereas in react it is not neccessary
import cors from "cors";
import router from "./routes/todos_routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;

app.use("/todos", router);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

if (process.env.NODE_ENV === "production") {
  //*Set static folder up in production
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

Connection();
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
