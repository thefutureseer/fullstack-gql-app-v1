//only exactly what we want, 
//in these queries shape/name everything possible to get
import { gql } from '@apollo/client';
export const GET_BOOKS = gql`
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
