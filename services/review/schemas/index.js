import { gql } from 'apollo-server';

const typeDef = gql`
  type Review {
    body: String! 
    id: ID!
    productId: ID!
    userId: ID!
  }

  type ReviewList {
    count: Int!
    reviews: [Review]!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    reviews: [Review]
  }

  extend type Product @key(fields: "id") {
    id: ID! @external
    reviews: [Review]
  }

  type Query {
    review(id: ID!): Review
    reviews: ReviewList
  }
`;

export default typeDef;
