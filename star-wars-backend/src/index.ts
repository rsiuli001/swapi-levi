import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { environment } from './config/environment';
import { characterTypeDefs } from './graphql/schema/character.typedef';
import { characterResolver } from './graphql/resolvers/character.resolver';

const startServer = async (): Promise<void> => {
  try {
    const PORT: number = Number(environment.port);

    const apolloServer = new ApolloServer({
      typeDefs: characterTypeDefs,
      resolvers: characterResolver,
    });

    await apolloServer.start();

    const app = express();
    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/graphql`);
    });
  } catch (err) {
    console.log('debug: ERROR: ', err);
  }
};

startServer();
