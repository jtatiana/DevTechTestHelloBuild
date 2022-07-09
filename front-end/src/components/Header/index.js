import { NavLink } from 'react-router-dom'
//material ui
import { Card, Container, AppBar, Toolbar, Button, Typography, Grid, IconButton } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Services
import AuthService from '../../services/Auth/AuthService'
// Router
import AppRouting from '../../routes/routes'

const Header = () => {
  const handleLogout = () => {
    AuthService.logOut()
  }
  const privateRouting = AppRouting.filter((repo) => {
    return repo.isPrivate != null
  })

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dev Tech Test
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Log out</Button>
        </Toolbar >
      </AppBar >
      <Container maxWidth="sm" sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Card sx={{ minWidth: 275, padding: 4 }}>
          <Grid container spacing={1} >
            <Grid item xs>
              {privateRouting.map(child => {
                return ((child.isPrivate != false) && child.isAvailableToNav &&
                  <NavLink key={`nav-${child.path}`
                  } to={child.to}>
                    <IconButton aria-label="Example">
                      {(child.label == "Profile") ? <AccountCircleIcon /> : <ListIcon />}
                    </IconButton>
                    {child.label}
                  </NavLink>
                )
              })}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  )
}
export default Header
