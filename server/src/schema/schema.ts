import { makeExecutableSchema } from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type User {
    name: String
    email: String
    code: Int
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    Users: [User]
  }

`;
export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})