import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

const client = new ApolloClient({
  uri: "http://localhost:6001/graphql"
});

export default client;
