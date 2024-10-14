// app.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/typeDefs'); // GraphQL schema definitions
const resolvers = require('./graphql/resolvers'); // GraphQL resolvers

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(res => {
  server.applyMiddleware({ app }); // Integrating ApolloServer with Express
});

module.exports = app;

// server.js
const app = require('./app');
const port = process.env.PORT || 4000; // Port configuration

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Server start confirmation
});
