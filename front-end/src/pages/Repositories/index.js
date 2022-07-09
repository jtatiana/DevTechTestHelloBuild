import { useState, useEffect, createContext } from 'react'
// material ui
import { IconButton, Box, Checkbox, Container, Card, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/Favorite';
// components
import InformationList from '../../components/InformationList/index'
import Search from '../../components/Search'
// Services
import storageService from '../../services/Storage/StorageService'

export const DataContext = createContext({ lists: [], toggleFav: () => { } })
const { Provider: DataProvider } = DataContext

const getFavorites = (lists) => lists.filter(repo => repo.isFavorite === true)

const isFavoriteList = (id) => {
  const favs = storageService.getDataByKey('favs')
  return favs?.some(fav => fav === id) ?? false
}
const mapList = (children) => children?.repositories?.map?.(repo => ({ ...repo, isFavorite: isFavoriteList(repo.id) }))

export default function Repositories({ children }) {

  const [lists, setLists] = useState(children.repositories)
  const [favoritesList, setFavoritesList] = useState(false)
  const [searchData, setSearchData] = useState('')

  useEffect(() => {
    setLists(mapList(children))
  }, [children])

  useEffect(() => {
    filterList()
  }, [favoritesList, searchData])

  const handleFilter = ({ target }) => {
    setSearchData(target.value)
  }

  const handleCheck = ({ target }) => {
    setFavoritesList(target.checked)
  }
  const filterList = () => {
    const searchText = searchData?.toLowerCase?.()

    if (searchText === null || searchText === '') {
      setLists(favoritesList ? getFavorites(mapList(children)) : mapList(children))
      return
    }
    let newRepos = mapList(children)?.filter?.(
      (repo) => {
        return repo?.name?.toLowerCase?.().includes?.(searchText) || repo?.description?.toLowerCase?.().includes?.(searchText)
      }
    )
    if (favoritesList) newRepos = getFavorites(newRepos)
    setLists(newRepos)
  }
  const toggleFav = (id) => {
    storageService.toggleFav(id)
    filterList()
  }

  return (
    <DataProvider value={{ lists, toggleFav }}>
      <Container maxWidth="md" sx={{ paddingTop: 4, height: 'inherit', overflow: 'auto' }}>
        <Card sx={{ minWidth: 275, padding: 4 }}>
          <h2>Repository List</h2>
          <Grid>
            <Search handleFilter={handleFilter} />
            <Checkbox
              icon={<FavoriteBorder sx={{ fontSize: 40, color: 'red' }} />}
              checkedIcon={<Favorite sx={{ fontSize: 40, color: 'red' }} />}
              checked={favoritesList}
              onChange={handleCheck}
            />
            <InformationList />
          </Grid>
        </Card>
      </Container>
    </DataProvider >
  )
}