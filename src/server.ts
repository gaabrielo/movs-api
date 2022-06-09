import 'reflect-metadata';
import './utils/connection';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import CategoryResolver from './graphql/category/CategoryResolver';
import MovieResolver from './graphql/movie/MovieResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, MovieResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  server
    .listen({ port: 3333 })
    .then(({ url }) => console.log(`🔥 Server started at ${url}`));
}

bootstrap();
