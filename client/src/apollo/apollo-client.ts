import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SERVER_SIDE_URL,
  credentials: "include",
  fetchOptions: {
    mode: "cors",
  }
});

const Apollo = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SERVER_SIDE_URL,
  credentials: "include",
});

export default Apollo;
