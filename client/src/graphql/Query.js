import { gql } from '@apollo/client';
export const GET_BOOKS = gql`
<<<<<<< HEAD
query {
    getAllBooks {
      _id
      title
      author
    }
  }
`
=======
  query {
      getAllBooks {
        _id
        title
        author
        prom
      }
    }
`
export const GET_ONE = gql`
  query 
    getOne($_id: ID ) {
      getOne(_id: $_id) {
      _id
    }}
`
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
