const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const app = express();
var cors = require("cors");

app.use(cors());

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    singleUpload(file: Upload): String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
  Mutation: {
    singleUpload: (parent, args) => {
      console.log(args);
      return "Success";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
