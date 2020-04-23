import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import resolvers from './resolvers';
import typeDefs from './schemas';
import UserService from './services';

const server = new ApolloServer({
  context: ({ req }) => ({
    service: new UserService(),
    userId: req.headers?.['user-id'],
  }),
  playground: true,
  schema: buildFederatedSchema({ resolvers, typeDefs }),
});

server.listen(4002).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
