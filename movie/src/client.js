import { ApolloClient, InMemoryCache  } from "@apollo/client";
// import { gql } from "apollo-server";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})


export default client;