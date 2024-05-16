import express from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

const app = express();

// Parse body of all incoming requests
// Extract any json data it finds in requests
// then populate (req.body as {text: string}).text 
// in src/controllers/todos.ts
app.use(json());

// Forward all routes starting with /todos to todoRoutes
app.use('/todos', todoRoutes);

// Error Handling Middleware function
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3001);