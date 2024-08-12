import { getAllCharacters, getCharacter } from '../../modules/character.service';

export const characterResolver = {
  Query: {
    characters: async () => {
      return await getAllCharacters();
    },
    character: async (_: any, args: { url: string }) => {
      return await getCharacter(args.url);
    },
  },
};
