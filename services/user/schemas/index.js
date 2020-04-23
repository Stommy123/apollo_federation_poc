import { gql } from 'apollo-server';

const typeDef = gql`
  type User @key(fields: "id") {
    age: Int! 
    id: ID!
    location: String!
    name: String!
  }

  type UserList {
    count: Int!
    users: [User]!
  }

  type Query {
    me: User!
    user(id: ID!): User
    users: UserList
  }
`;

export default typeDef;
