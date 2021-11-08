import Items from './Items';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function ShoppingList() {
  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Items />
      </div>
    </ApolloProvider>
  );
}
