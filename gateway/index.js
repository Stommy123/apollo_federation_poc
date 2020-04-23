import { ApolloServer } from 'apollo-server';
import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway';

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest = ({ request, context }) => {
    request.http.headers.set('user-id', context.userId);
  }
};

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'base', url: 'http://localhost:4001' },
    { name: 'user', url: 'http://localhost:4002' },
    { name: 'product', url: 'http://localhost:4003' },
    { name: 'review', url: 'http://localhost:4004' },
  ],
  buildService: ({ url }) => new AuthenticatedDataSource({ url })
});

const server = new ApolloServer({
  gateway,
  context: _ => ({ userId: '1' }),
  playground: true,
  subscriptions: false,
});

server.listen(4000).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
