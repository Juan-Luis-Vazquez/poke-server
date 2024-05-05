import express, {Request, Response} from 'express';
import authMiddleware from "./middlewares/auth.middleware";
import pokemonRouter from './routes/pokemon.router';
import db from './config/db';
import dotenv from 'dotenv';
// Specify where the dotenv variables are located
dotenv.config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 3000;
db();

// Add middleware and other routes as needed
app.use('/pokemons', authMiddleware.authenticate,  pokemonRouter);

// Handle other endpoints or invalid requests
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(port, () => {
  console.log(`App is running http://localhost:${port}`);
});
