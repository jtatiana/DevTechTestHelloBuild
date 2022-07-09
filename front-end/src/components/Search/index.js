import React from 'react'
import { TextField } from '@mui/material'

const Search = ({ handleFilter }) => {
  return (
    <TextField
      id="outlined-basic"
      onKeyUp={handleFilter}
      variant="outlined"
      label="Search"
    />
  )
}
export default Search
