import { gql } from 'apollo-server';

const typeDef = gql`
  type Product @key(fields: "id userId") {
    description: String
    id: ID!
    name: String!
    userId: ID!
  }

  type ProductList {
    count: Int!
    products: [Product]!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    products: [Product]
  }

  type Query {
    product(id: ID!): Product
    products: ProductList
  }
`

export default typeDef;
