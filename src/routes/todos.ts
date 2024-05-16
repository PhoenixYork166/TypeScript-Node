import { Router } from 'express';
// const express = require('express');

// Importing function from src/controllers/todos
// for creating a newTodo object
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todos';

// Creating Middleware
const router = Router();

router.post('/', createTodo);

// Get all Todos
router.get('/', getTodos);

// To update a Todo
router.patch('/:id', updateTodo);

// To delete a Todo by id
router.delete('/:id', deleteTodo);

export default router;