import { Request, Response } from 'express';
import { language } from "../utils/strings";
import ServerResponse from '../interfaces/response.interface';

import { MainClient, NamedAPIResourceList } from 'pokenode-ts';

// TODO: Manage language changes

class PokemonController {

  static async getAllPokemons(req: Request, res: Response): Promise<void> {
    const pokeApi = new MainClient();
    let serverResponse: ServerResponse<any>;

    try {
      const pokeList: NamedAPIResourceList = await pokeApi.pokemon.listPokemons();

      serverResponse = {
        data: pokeList.results,
        message: language.genericSuccessMessage,
        statusCode: 200
      };
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      serverResponse = {
        data: null,
        message: language.genericErrorMessage,
        statusCode: 500 
      };
    }

    res.json(serverResponse);
  }

  // Add more methods for handling pokemons-related functionality
}

export default PokemonController;
