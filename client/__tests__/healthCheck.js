// import { gql } from "@apollo/client";

// import { client } from "../src/index";

// it("running a health check against gql schema", async () => {
//   let result = await client.executeOperation({
//     query: gql`
//       query {
//         test(bool: false)
//       }
//     `
//   });

//   expect(result).toBeTruthy();
//   expect(result).toHaveProperty("data");
//   expect(result.errors).toBeFalsy();
//   expect(result.data?.test).toEqual(false)
// });