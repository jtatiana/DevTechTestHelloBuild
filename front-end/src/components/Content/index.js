
import { useEffect, useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Container, Card } from '@mui/material';
import { useQuery, gql } from '@apollo/client'
const QUERY = gql`
{
  viewer {
    avatarUrl
    login
    name
    createdAt
    repositories(first: 100) {
      edges {
        node {
          name
          description
          databaseId
          url
          createdAt
        }
      }
    }
  }
}`
const mapRepos = (repos) => {
  return repos?.map?.(({ node: repo }) => {
    return {
      name: repo.name,
      description: repo.description,
      url: repo.url,
      id: repo.databaseId
    }
  })
}
const Content = ({ PrivateRouting }) => {
  const [dataChildren, setData] = useState({})
  const { data, loading, error } = useQuery(
    QUERY,
    {
      fetchPolicy: 'cache-and-network'
    }
  )
  useEffect(() => {
    if (!data) {
      return
    }
    setData({
      ...data.viewer,
      repositories: mapRepos(data?.viewer?.repositories?.edges) ?? []
    })
  }, [data])
  if (loading) {
    return (
      <Container maxWidth="md" sx={{ paddingTop: 4 }}>
        <Card sx={{ minWidth: 275, padding: 4 }}><h1>Loading</h1>
        </Card>
      </Container>)
  }
  if (error) {
    return (
      <Container maxWidth="md" sx={{ paddingTop: 4 }}>
        <Card sx={{ minWidth: 275, padding: 4 }}><h1>Error</h1>
        </Card>
      </Container>)
  }
  return (
    <Routes>
      {PrivateRouting.map(route => {
        return (<Route path={route.path} key={`route-${route.path}`} element={<route.Component>{dataChildren}</route.Component>} />)
      })}

      <Route path='*' element={<Navigate replace to='profile' />} />
    </Routes>
  )
}
export default Content
