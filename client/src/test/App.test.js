// import { render, screen } from '@testing-library/react';
// import App from '../index';
import { gql } from "@apollo/client";

import { client } from "../index";

it("running a health check against gql schema", async () => {
  let result = await client.executeOperation({
    query: gql`
      query {
        test(bool: false)
      }
    `
  });

  expect(result).toBeTruthy();
  expect(result).toHaveProperty("data");
  expect(result.errors).toBeFalsy();
  expect(result.data?.test).toEqual(false)
});


// test('renders text & a form underneath', () => {
//   render(<App/>);
//   const mainElement = screen.getByText(/List of secrets/i);
//   expect(mainElement).toBeInTheDocument();
// });



