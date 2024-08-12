export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
}

export interface CharacterUnresolved extends Character {
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  homeworld: string;
}

export interface HomeWorld {
  name: string;
  climate: string;
  terrain: string;
}

export interface Film {
  title: string;
  episode: number;
}

export interface Vehicle {
  name: string;
  model: string;
  class: string;
  cost: number | null;
}

export interface Starship {
  name: string;
  model: string;
  class: string;
  cost: number | null;
}

export interface CharacterResolved extends Character {
  films: Film[];
  species: string[];
  vehicles: Vehicle[];
  starships: Starship[];
  homeworld: HomeWorld;
}
