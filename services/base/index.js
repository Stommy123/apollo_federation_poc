import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import resolvers from './resolvers/base';
import typeDefs from './schemas/base';

const server = new ApolloServer({
  playground: true,
  schema: buildFederatedSchema({ resolvers, typeDefs }),
});

server.listen(4001).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
