import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://gpt-clone-gamma.vercel.app/",
  credentials: "inclde",
});

const Apollo = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  uri: "https://gpt-clone-gamma.vercel.app/",
});

export default Apollo;
