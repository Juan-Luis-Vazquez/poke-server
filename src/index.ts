import express, {Request, Response} from 'express';
import authMiddleware from "./middlewares/auth.middleware"
import pokemonRouter from './routes/pokemon.router';

const app = express();
const port = 3000;

// Add middleware and other routes as needed
app.use('/pokemons', authMiddleware.authenticate,  pokemonRouter);

// Handle other endpoints or invalid requests
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(port, () => {
  console.log(`App is running http://localhost:${port}`);
});
