
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import HttpError from "./middleware/HttpError.js";

const app = express();
const port = 5001;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

console.log("filename", __fileName);
console.log("folder", __dirName);
app.use(express.static(path.join(__dirName, "public")))

let tasks = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "Master Express", completed: true }
];

// Home Page
app.get("/", (req, res) => {
    const completed = tasks.filter(t => t.completed).length;
    const uncompleted = tasks.length - completed;

    res.render("index", { tasks, completed, uncompleted });
});

// Add Task
app.post("/add", (req, res) => {
    const newTask = {
        id: new Date().getTime(),
        title: req.body.task,
        completed: false
    };

    tasks.push(newTask);
    res.redirect("/");

});

// Toggle Complete
app.post("/toggle/:id", (req, res) => {
    const id = Number(req.params.id);

    tasks = tasks.map(task => task.id === id
        ? { ...task, completed: !task.completed } : task);

    res.redirect("/");
});

// Delete Task
app.post("/delete/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
        return res.status(404);
    }
    tasks.splice(index, 1);
    res.redirect("/");
});

// Edit Task
app.post("/edit/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedText = req.body.updatedTask;

    if (!updatedText) {
        return next(new HttpError("Updated task cannot be empty", 400));
    }
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return next(new HttpError("Task not found", 404));
    }
    task.title = updatedText;
    res.redirect("/");
});

app.use((req, res, next) => {
    next(new HttpError("requested route not found", 404));
});

// centralize error handling

app.use((error, req, res, next) => {
    if (req.headersSent) {
        next(error);
    }
    res.status(error.statusCode || 500).json({
        message: error.message || "internal server error please try again later",
    });
});

app.listen(port, () => {
    console.log("server running on port", port);
});