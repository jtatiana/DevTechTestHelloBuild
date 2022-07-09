import { useContext } from 'react'
//pages
import { DataContext } from '../../pages/Repositories/index'
// material ui
import { ListItemButton, ListItem, ListItemText } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const ItemList = ({ repo }) => {
  const { toggleFav } = useContext(DataContext)
  if (!repo) {
    return null
  }

  return (
    <ListItem
      key={repo.id}
      disablePadding
      secondaryAction={
        <IconButton onClick={() => toggleFav(repo?.id)}>
          {repo?.isFavorite ?
            <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon sx={{ color: 'red' }} />}
        </IconButton>
      }
    >
      <ListItemText
        primary={repo?.name ?? 'Name not available'}
        secondary={repo?.description ?? 'Description not available'}
      />
    </ListItem>
  )
}

export default ItemList
