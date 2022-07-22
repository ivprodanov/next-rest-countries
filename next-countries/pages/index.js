import React, {useState, useContext} from "react";
import CountryCard from "../components/Card/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchBar from "../components/SearchBar/SearchBar";
import { Link, OutlinedInput, Stack } from "@mui/material";
import FilterDropdown from "../components/Filter/FilterDropdown";
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {ThemeContext} from '../context/ThemeContext'


export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v2/all')
  const data = await res.json() 

  return {
    props: {
      countries: data
    }
  }
}

const Container = ({countries}) => {
  const [filteredData, setFilteredData] = useState(countries)
  const {theme} = useContext(ThemeContext);

  const filterData = (e) => {
    e.preventDefault()
    const filtered = countries.filter(x =>
      x.name.toLowerCase().includes(e.target.value.toLowerCase())
    )

    setFilteredData(filtered)
  }

  return (
    <React.Fragment>
      <Stack direction="row" justifyContent="space-between" m={3}>
        {/* <SearchBar /> */}
        <FormControl sx={{ m: 1, width: '33vw' }} variant="outlined" style={{backgroundColor: theme.elements}}>
          <OutlinedInput
            style={{color: theme.text}}
            onChange={filterData}
            placeholder='Search for a country...'
            id="outlined-adornment-weight"
            startAdornment={<InputAdornment position="start">
              <SearchIcon style={{color: theme.text}}/>
            </InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
        {/* <FilterDropdown /> I didn't have time to implement the logic for this one.. */}
      </Stack>
      <Box sx={{ flexGrow: 1 }} m={4} >
        <Grid container spacing={2}>
          {filteredData.map((country) => (
            <Grid key={country.name} item xs={3} mb={4}>
                <Link href={`/country/${country.alpha3Code}`}>
                  <CountryCard country={country} />
                </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Container;

