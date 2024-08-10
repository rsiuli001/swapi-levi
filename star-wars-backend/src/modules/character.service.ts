import { environment } from '../config/environment';
import { fetchFromUrl } from '../data';
import { CharacterResolved, CharacterUnresolved, Film, Starship, Vehicle } from '../types';

export const getCharacter = async (url: string) => {
  const character: CharacterUnresolved = await fetchFromUrl(url);

  // resolve films
  const filmPromises: Promise<Film>[] = character.films.map(async (filmUrl: string) => {
    const film: any = await fetchFromUrl(filmUrl);
    return { title: film.title, episode: film.episode } as Film;
  });

  const vehiclesPromises: Promise<Vehicle>[] = character.vehicles.map(async (url: string) => {
    const vehicle: any = await fetchFromUrl(url);
    return {
      class: vehicle.class,
      cost: vehicle.cost,
      model: vehicle.model,
      name: vehicle.name,
    } as Vehicle;
  });

  const starshipPromises: Promise<Vehicle>[] = character.starships.map(async (url: string) => {
    const ship: any = await fetchFromUrl(url);
    return {
      class: ship.class,
      cost: ship.cost,
      model: ship.model,
      name: ship.name,
    } as Starship;
  });

  const characterResolved: CharacterResolved = {
    ...character,
    films: await Promise.all(filmPromises),
    species: [] as any,
    vehicles: await Promise.all(vehiclesPromises),
    starships: await Promise.all(starshipPromises),
  };
  //   character.films = await Promise.all(filmPromises);

  return characterResolved;
};

export const getAllCharacters = async () => {
  const baseUrl = environment.apiUrls.swapi;
  const url = `${baseUrl}/people/all.json`;
  const characters = await fetchFromUrl(url);
  return characters;
};
