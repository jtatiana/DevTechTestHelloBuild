
import { ApolloProvider } from '@apollo/client'
import { Navigate } from 'react-router-dom'
// Services
import AuthService from '../services/Auth/AuthService'
import GraphQLService from '../services/GraphQL/GraphQLService'
// Components
import Header from '../components/Header/index'
import Content from '../components/Content/index'

export const LazyLayout = () => {
  if (!AuthService.isAuthenticated()) {
    return <Navigate to='/sign-in' />
  }
  return (
    <ApolloProvider client={GraphQLService}>
      <>
        <Header />
        <Content />
      </>
    </ApolloProvider>
  )
}

export default LazyLayout
