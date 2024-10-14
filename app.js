// app.js
const express = require('express'); // Import Express framework
const { ApolloServer } = require('apollo-server-express'); // Import Apollo Server for GraphQL
const typeDefs = require('./graphql/typeDefs'); // Load GraphQL type definitions
const resolvers = require('./graphql/resolvers'); // Load GraphQL resolvers

const app = express(); // Create an Express application

const server = new ApolloServer({ typeDefs, resolvers }); // Initialize Apollo Server with typeDefs and resolvers
server.start().then(res => {
  server.applyMiddleware({ app }); // Apply Apollo middleware to the Express app
});

module.exports = app; // Export the Express app

// server.js
const app = require('./app'); // Import the Express app
const port = process.env.PORT || 4000; // Set the port, defaulting to 4000

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Log the server URL
});
