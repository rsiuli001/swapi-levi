# Star Wars Frontend

This project is the frontend service for the SWAPI-LEVI application. It is built using ReacJS, TypeScript, Redux, GraphQL, Apollo Graphql Client. For styling this app is using Tailwind css.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Available Scripts] (#available-scripts)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/swapi-levi.git
   cd swapi-levi/star-wars-frontend
    ```

2. Install the dependencies
    ```bash
    npm install
    ```

## Usage

1. Start the react app:
    ```bash
    npm start
    ```

2. The frontend will be running on http://localhost:3000/.

## Technologies

- ReactJS: JavaScript library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static types.
- TailwindCSS: Utility-first CSS framework for styling.
- GraphQL: Query language for APIs.

## Project Structure

1. Project Structure

    ```bash
        .
    ├── public
    │   ├── index.html
    │   └── images
    │       └── frontend-ui-screenshot.png
    ├── src
    │   ├── components
    │   │   ├── CharacterList.tsx
    │   │   ├── CharacterPopup.tsx
    │   ├── graphql
    │   │   └── queries.ts
    │   ├── redux
    │   │   ├── searchSlice.ts
    │   │   ├── store.ts
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   └── setupTests.ts
    ├── .gitignore
    ├── package.json
    ├── tsconfig.json
    └── tailwind.config.js
    ```

- `src/components/CharacterList.tsx`: Component for the list of characters with search functionality.
- `src/components/CharacterPopup.tsx`: Component for displaying character details in a popup.
- `src/graphql/queries.ts`: GraphQL queries for fetching data from the backend.
- `src/App.tsx`: Main application component.
- `src/index.tsx`: Entry point of the application.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
