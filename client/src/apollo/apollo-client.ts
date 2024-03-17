import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/",
  credentials: "include",
});

const Apollo = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  uri: "http://localhost:5000/",
});

export default Apollo;
