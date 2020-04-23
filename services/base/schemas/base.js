import { gql } from 'apollo-server';

const typeDef = gql`
  type ApiMetaData {
    ping: String!
  }

  type Query {
    api: ApiMetaData
  }
`;

export default typeDef;
