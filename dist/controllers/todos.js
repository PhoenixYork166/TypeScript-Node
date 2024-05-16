"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
// Talking to a Database
// This TODOS array lose all memory upon server restart
const TODOS = [];
const createTodo = (req, res, next) => {
    // receiving requests
    // { "text": "Some text" }
    const text = req.body.text;
    // src/models/todo.ts
    // export class Todo {
    //     constructor(public id: string, public text: string) {}
    // }
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(200).json({ message: 'Created the todo.', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(200).json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    // src/routes/todos.ts
    // router.patch('/:id');
    const todoId = req.params.id;
    const updatedText = req.body.text;
    // Find the index of the Todo we're after
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    // if we could NOT find it, todoIndex = -1
    if (todoIndex < 0) {
        // This triggers app.ts Error Handling Middleware function
        // Error Handling Middleware function
        // app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        //     res.status(500).json({ message: err.message });
        // });
        throw new Error('Could NOT find Todo!');
    }
    // Update the specified Todo
    // this TODOS[todoIndex] => 1 Todo
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.status(200).json({ message: 'Updated this Todo!', updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    // src/routes/todos.ts
    // router.delete('/:id');
    const todoId = req.params.id;
    // Find the index of the Todo we're after
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    // if we could NOT find it, todoIndex = -1
    if (todoIndex < 0) {
        // This triggers app.ts Error Handling Middleware function
        // Error Handling Middleware function
        // app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        //     res.status(500).json({ message: err.message });
        // });
        throw new Error('Could NOT find Todo!');
    }
    // Delete the specified Todo
    TODOS.splice(todoIndex, 1);
    res.status(200).json({ message: 'Deleted this Todo!' });
};
exports.deleteTodo = deleteTodo;
