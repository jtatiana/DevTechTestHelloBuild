import { NavLink } from 'react-router-dom'
import AuthService from '../../services/Auth/AuthService'
import { Card, Container, AppBar, Toolbar, Button, Typography, Grid, IconButton } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({ PrivateRouting }) => {

  const handleLogout = () => {
    AuthService.logOut()
  }
  return (
    <>
      <AppBar position="static">
        < Toolbar >
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
              {PrivateRouting.map(child => {
                return (child.isAvailableToNav &&
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
      </Container >
    </>
  )
}
export default Header
