import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

let tasks = [];

app.post("/submit", (req, res) => {
    tasks.push(req.body);
    console.log(tasks);
    res.render("index.ejs", { listOfTasks: tasks });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });