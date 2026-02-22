
import express from "express";
import HttpError from "./middleware/HttpError.js";

const app = express();
const port = 5001;

app.use(express.json());

let todoList = [
        {
    id: 1,
    title: "Drink Water",
    description: "Drink at least 8 glasses of water today"
    },
    {
    id: 2,
    title: "Meditation",
    description: "Meditate for 10 minutes to relax the mind"
    },
    {
    id: 3,
    title: "Plan the Day",
    description: "Write down top 3 priorities for today"
    },
    {
    id: 4,
    title: "Revise Notes",
    description: "Revise yesterday's study notes"
    },
    {
    id: 5,
    title: "Practice HTML & CSS",
    description: "Create a small layout using flexbox"
    },
    {
    id: 6,
    title: "Update Resume",
    description: "Add recent projects and skills"
    },
    {
    id: 6,
    title: "Check Emails",
    description: "Reply to important emails"
    }
];

// Home Page
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to To-Do List ✅" });
});

// get all to do list
app.post("/todos", (req, res) => {
    res.status(200).json({
    message: "Todo list retrieved successfully!!!",todoList,});

});

// get to do by id
app.get("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const todo = todoList.find((t) => t.id === id);

    if (!todo) {
        return res.status(404).json("To-do item not found");
    }
    res.status(200).json(todo);
});
//create to do 
app.post("/createTodo", (req, res, next) => {

    const { title, description } = req.body;

    const newTodo = {
        id: new Date().getTime(),
        title,
        description,    
    };

    todoList.push(newTodo);

    res.status(201).json({
        message: "To do item created successfully!!!",
        newTodo,
    });

});
//update to do using patch
app.patch("/todos/:id", (req, res) => {

    const id = Number(req.params.id);

    const { task, description } = req.body;

    const todo = todoList.find((t) => t.id === id);

    if (!todo) {
        return res.status(404).json({
        message: "To do item not found",
        });
    }

    if (task !== undefined) {
    todo.task = task;
    }

    if (description !== undefined) {
    todo.description = description;
    }

    res.status(200).json({ 
        message: "To do item updated successfully",
        todo,
    });

});

// replace to do using put

app.put("/todos/:id", (req, res) => {

    const id = Number(req.params.id);

    const { task, description } = req.body;

    const index = todoList.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({
        message: "To do item not found",
        });
    }

    todoList[index] = {
        ...todoList[index],
        task,
        description,
    };

    res.status(200).json({
        message: "To do item updated successfully",
        todo: todoList[index],
    });

});
//delete to do
app.delete("/todos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const index = todoList.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({
        message: "To do item not found",
        });
    }

    todoList.splice(index, 1);

    res.status(200).json({
        message: "To do item deleted successfully"
    });
});

//undefined route handling
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