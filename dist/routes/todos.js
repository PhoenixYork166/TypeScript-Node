"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// const express = require('express');
// Importing function from src/controllers/todos
// for creating a newTodo object
const todos_1 = require("../controllers/todos");
// Creating Middleware
const router = (0, express_1.Router)();
router.post('/', todos_1.createTodo);
// Get all Todos
router.get('/', todos_1.getTodos);
// To update a Todo
router.patch('/:id', todos_1.updateTodo);
// To delete a Todo by id
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
