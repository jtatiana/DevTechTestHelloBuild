import { useContext } from 'react'
// material ui
import { List } from '@mui/material'
// pages
import { DataContext } from '../../pages/Respositories/index'
// Components
import ItemList from '../ItemList/index'

const InformationList = () => {
  const { lists } = useContext(DataContext)
  if (!lists || lists.length === 0) {
    return (<h1>No repositories found</h1>)
  }
  return (
    <List>
      {lists?.map?.((repo) => repo && <ItemList key={repo.name} repo={repo} />
      )}
    </List>
  )
}
export default InformationList
