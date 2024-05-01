import express from 'express';
import PokemonController from '../controllers/pokemon.controller';

const router = express.Router();

// Handle the /pokemons endpoint
router.get('/', PokemonController.getAllPokemons);

// Add more routes for the /pokemons endpoint as needed

export default router;
