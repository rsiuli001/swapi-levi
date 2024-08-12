# Star Wars Backend

This project is the backend service for the Star Wars backend application. It is built using Node.js, Express, and GraphQL with Apollo Server. The backend serves data from the Star Wars API and resolves related data for characters, such as films, vehicles, starships, and homeworlds.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Queries](#queries)
- [Technologies](#technologies)
- [Project Structure](#project-structure)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/swapi-levi.git
   cd swapi-levi/star-wars-backend
    ```

2. Install the dependencies
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The backend will be running on http://localhost:4000/graphql. You can access the GraphQL playground to interact with the API.

## API Endpoints
- /graphql: The GraphQL endpoint for querying Star Wars data.


## Queries

Get All Characters
    ```bash
    query Characters {
        characters {
            name
            height
            mass
            hair_color
            skin_color
            eye_color
            birth_year
            gender
            homeworld
            films
            species
            vehicles
            starships
            url
        }
    }
    ```

Get a Single Character with Resolved Data
    ```bash
    query Character($url: String!) {
        character(url: $url) {
            name
            height
            mass
            hair_color
            skin_color
            eye_color
            birth_year
            gender
            homeworld {
                name
                climate
                terrain
            }
            films {
                title
                episode
            }
            vehicles {
                name
                model
                class
                cost
            }
            starships {
                name
                model
                class
                cost
            }
            url
        }
    }
    ```

## Technologies

- Node.js: JavaScript runtime environment.
- Express: Web framework for Node.js.
- GraphQL: Query language for APIs.
- Apollo Server: GraphQL server for Express.

## Project Structure

    ```bash
    .
    ├── src
    │   ├── config
    │   │   └── environment.ts
    │   ├── data
    │   │   └── index.ts
    │   ├── graphql
    │   │   ├── resolvers
    │   │   │   └── characterResolvers.ts
    │   │   └── schema
    │   │       └── characterTypeDefs.ts
    │   ├── modules
    │   │   └── character.service.ts
    │   ├── index.ts
    │   ├── types.ts
    ├── .gitignore
    ├── package.json
    └── tsconfig.json
    ```

- `src/index.ts`: Entry point of the application and Contains server setup and middleware configuration.
- `src/types.ts`: Contains typescript types required for the application.
- `src/graphql/schema`: GraphQL schema definitions.
- `src/graphql/resolvers`: Resolver functions for the GraphQL queries.
- `src/modules`: Contains business logics required for the resolvers.