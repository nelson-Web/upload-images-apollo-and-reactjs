import React, { Fragment } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import UploadImage from "./UploadImage";

import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <UploadImage />
      </ApolloProvider>
    </Fragment>
  );
}

export default App;
