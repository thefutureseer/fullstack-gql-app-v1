//express for middleware
const express = require('express');
const path = require('path');
//apollo server for gql
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schema/index');
//dotenv to hide files easily
require('dotenv').config();

//bring in the database
const db = require('./config/connection');

const PORT = process.env.PORT || 10000;

//get express running
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//add express middleware to apollo server
server.applyMiddleware({ app });

//add express middleware to parse incoming requests w/urlencoded payloads based on body-parser
app.use(express.urlencoded({ extended: false }));
//parse incoming requests with json payloads based on body-parser
app.use(express.json());

// if we're in production, serve client/build as static assets
//serve static assets if in production
if(process.env.NODE_ENV === 'production') {
//set static folder
 app.use(express.static('client'));
 app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
 });
} 
// //set up environment on / serve index.html from client side
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public', 'index.html'));
});

//HEALTH CHECK
// app.get('/hello', (_, res) => {
//   res.send('Hello from above');
// })

//open up database
db.once('open', () => {
  //give the server a port to listen on
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // console.log('Express server started on port %s at %s', app.address().port, app.address().address);

    //gql playground
     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
  // app.on('listening', function() {
  //   console.log('Express server started on port %s at %s', app.address().port, app.address().address);
  // });