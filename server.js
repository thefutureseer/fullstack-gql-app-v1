const express = require('express');
<<<<<<< HEAD
=======
const path = require('path');
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schema/index');
require('dotenv').config();

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
<<<<<<< HEAD
  resolvers
=======
  resolvers,
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

<<<<<<< HEAD
=======
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});