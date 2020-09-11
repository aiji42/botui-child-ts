import React, { FC } from 'react'
import Board from '../components/Board'
import { ApolloProvider } from '@apollo/client'
import { client } from '../api/graphql'

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Board />
    </ApolloProvider>
  )
}

export default App
