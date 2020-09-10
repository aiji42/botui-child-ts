import React from 'react';
import Board from '../components/Board'
import { ApolloProvider } from '@apollo/client'
import { client } from '../api/graphql'

function App() {
  return (
    <ApolloProvider client={client}>
      <Board />
    </ApolloProvider>
  );
}

export default App;
