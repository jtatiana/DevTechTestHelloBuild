import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import AuthService from '../Auth/AuthService'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  fetch
})

const authLink = setContext((_, { headers }) => {
  const token = AuthService.getGitToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const graphqlService = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: ({ graphQLErrors }) => {
    console.log(graphQLErrors)
  }
})

export default graphqlService
