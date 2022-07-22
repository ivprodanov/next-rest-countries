import React from 'react'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';

function SearchBar() {
  return (
    <FormControl sx={{ m: 1, width: '33vw' }} variant="outlined">
    <OutlinedInput
    placeholder='Search for a country...'
      id="outlined-adornment-weight"
    //   value={values.weight}
    //   onChange={handleChange('weight')}
      startAdornment={<InputAdornment position="start">
        <SearchIcon/>
      </InputAdornment>}
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        'aria-label': 'weight',
      }}
    />
  </FormControl>
  )
}

export default SearchBar