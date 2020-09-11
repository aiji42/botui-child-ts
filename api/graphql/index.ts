import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
  headers: {
    'x-api-key': 'da2-pk43aih4aneb5armfpaeww4ymy'
  },
  uri:
    'https://le3vy73k4bgmtmogo4uqkgi7mq.appsync-api.ap-northeast-1.amazonaws.com/graphql',
  cache: new InMemoryCache()
})

export const getSession = gql`
  query GetSession($id: ID!) {
    getSession(id: $id) {
      proposals
      active
    }
  }
`
