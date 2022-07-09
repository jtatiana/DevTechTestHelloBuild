import { useState, memo } from 'react'
// material ui
import { Grid, Link, Avatar, Stack, Box, Typography, Container, Card } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


export default function Profile({ children }) {
  const {
    login,
    avatarUrl,
    name,
    repositories
  } = children

  if (!children) return (<h1>Loading</h1>)

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <Card sx={{ minWidth: 275, padding: 4 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} >
            <Stack direction="row" spacing={2} sx={{
              align: 'center', justifyContent: 'center', position: 'relative'
            }}>
              <Avatar
                alt="NotAvailable"
                src={avatarUrl}
                sx={{ width: 56, height: 56 }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography id="transition-modal-title" variant="h6" component="h2"> <strong>GitHub link: </strong>
              <Link href={`https://github.com/${login}`} target='_blank' rel='noreferrer'>@{login}</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <strong>Name:</strong> {name}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <strong>Total repositories: </strong> {repositories?.length}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}