import Header from "./header";
import { ApolloProvider } from "react-apollo";
import client from "../apolloSetup";

const styels = {
  color: "#555"
};

export const Layout = props => (
  <ApolloProvider client={client}>
    <div style={styels}>
      <Header />
      {props.children}
    </div>
  </ApolloProvider>
);
