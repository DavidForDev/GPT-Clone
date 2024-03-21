import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SERVER_SIDE_URL,
});

const Apollo = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  uri: process.env.NEXT_PUBLIC_SERVER_SIDE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default Apollo;
