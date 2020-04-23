import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import resolvers from './resolvers';
import typeDefs from './schemas';
import ReviewService from './services';

const server = new ApolloServer({
  context: _ => ({ service: new ReviewService() }),
  playground: true,
  schema: buildFederatedSchema({ resolvers, typeDefs }),
});

server.listen(4004).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
