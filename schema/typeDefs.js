const { gql } = require('apollo-server-express');

const typeDefs = gql`
# This "Book" type defines the queryable fields for every book in our data source.
type Book {
<<<<<<< HEAD
  _id: String
  title: String
  author: String
#  prom: Boolean
  reminders: String
=======
  _id: ID!
  author: String
  title: String
  prom: Boolean
  reminders: Int
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
<<<<<<< HEAD
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books: [Book]

  getAllBooks: [Book]
}

input PostInput {
  title: String
#  reminders: Int
  prom: Boolean
  author: String
=======
# case, the "books" query returns an *array of zero or more Books (defined above).
type Query {
  books: [Book]
  getAllBooks: [Book]
  getOne(_id:ID!): Book
}

#object to use instead of rewriting args for the mutations below
input PostInput {
  _id: ID!
  author: String
  title: String
  prom: Boolean
  reminders: Int
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
}

type Mutation {
  createPost(books: PostInput): Book
<<<<<<< HEAD
=======
  deleteOnePost(_id: ID!): Book
  updateOnePost(books: PostInput): Book
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
}
`

module.exports = typeDefs;