import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import resolvers from './resolvers';
import typeDefs from './schemas';
import ProductService from './services';

const server = new ApolloServer({
  context: _ => ({ service: new ProductService() }),
  playground: true,
  schema: buildFederatedSchema({ resolvers, typeDefs }),
});

server.listen(4003).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
