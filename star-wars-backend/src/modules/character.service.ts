import { environment } from '../config/environment';
import { fetchFromUrl } from '../data';
import {
  CharacterResolved,
  CharacterUnresolved,
  Film,
  HomeWorld,
  Starship,
  Vehicle,
} from '../types';

export const getCharacter = async (url: string) => {
  const character: CharacterUnresolved = await fetchFromUrl(url);

  const filmPromises: Promise<Film>[] = character.films.map(async (filmUrl: string) => {
    const film: any = await fetchFromUrl(filmUrl);
    return { title: film.title, episode: film.episode_id } as Film;
  });

  const homeWorldPromise = async (): Promise<HomeWorld> => {
    const url = character.homeworld;
    const data = await fetchFromUrl(url);
    return {
      name: data.name,
      climate: data.climate,
      terrain: data.terrain,
    } as HomeWorld;
  };

  const vehiclesPromises: Promise<Vehicle>[] = character.vehicles.map(async (url: string) => {
    const vehicle: any = await fetchFromUrl(url);
    return {
      class: vehicle.vehicle_class,
      cost: vehicle.cost_in_credits,
      model: vehicle.model,
      name: vehicle.name,
    } as Vehicle;
  });

  const starshipPromises: Promise<Vehicle>[] = character.starships.map(async (url: string) => {
    const ship: any = await fetchFromUrl(url);
    return {
      class: ship.starship_class,
      cost: ship.cost_in_credits,
      model: ship.model,
      name: ship.name,
    } as Starship;
  });

  const characterResolved: CharacterResolved = {
    ...character,
    homeworld: await homeWorldPromise(),
    films: await Promise.all(filmPromises),
    species: [] as any,
    vehicles: await Promise.all(vehiclesPromises),
    starships: await Promise.all(starshipPromises),
  };

  return characterResolved;
};

export const getAllCharacters = async () => {
  const baseUrl = environment.apiUrls.swapi;
  const url = `${baseUrl}/people/all.json`;
  const characters = await fetchFromUrl(url);
  return characters;
};
