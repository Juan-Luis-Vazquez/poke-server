import { Request, Response } from 'express';

class PokemonController {
  static getAllPokemons(req: Request, res: Response): void {
    //TODO: Fetch pokemons from POKE API
    const pokemons: any[] = [
      // Add fetched pokemons here
      {
        id:1,
        name:"Pikachu",
        type:"Electric"
      }
    ];

    res.json({ pokemons });
  }

  // Add more methods for handling pokemons-related functionality
}

export default PokemonController;
