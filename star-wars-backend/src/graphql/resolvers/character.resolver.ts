import { getAllCharacters, getCharacter } from '../../modules/character.service';

export const characterResolver = {
  Query: {
    characters: async () => {
      return await getAllCharacters();
    },
    character: async () => {
      const url = 'https://swapi.info/api/people/1';
      return await getCharacter(url);
    },
  },
};
