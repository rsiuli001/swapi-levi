import { gql } from 'apollo-server-express';

export const characterTypeDefs = gql`
  type CharacterUnresolved {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: String
    films: [String]
    species: [String]
    vehicles: [String]
    starships: [String]
    url: String
  }

  type CharacterResolved {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    homeworld: String
    films: [Film]
    species: [String]
    vehicles: [Vehicle]
    starships: [Starship]
    url: String
  }

  type Film {
    title: String
    episode: Int
  }

  type Vehicle {
    name: String
    model: String
    class: String
    cost: Int
  }

  type Starship {
    name: String
    model: String
    class: String
    cost: Int
  }

  type Query {
    characters: [CharacterUnresolved]
    character: CharacterResolved
  }
`;
