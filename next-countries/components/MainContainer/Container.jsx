import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../Card/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SearchBar from "../SearchBar/SearchBar";
import { Stack } from "@mui/material";
import FilterDropdown from "../Filter/FilterDropdown";
import ActiveLink from "../ActiveLinkWrapper/ActiveLink";

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
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   axios.get("https://restcountries.com/v2/all").then((res) => {
  //     const allCountries = res.data;
  //     console.log(allCountries);
  //     setCountries(allCountries);
  //   });
  // }, []);

  return (
    <div>
      <Stack direction="row" justifyContent="space-between" m={3}>
        <SearchBar />
        <FilterDropdown />
      </Stack>
      <Box sx={{ flexGrow: 1 }} m={4}>
        <Grid container spacing={2}>
          {countries.map((country) => (
            <Grid item xs={3} key={country.name} mb={4}>
                <ActiveLink href={`/country/${country.alpha3Code}`}>
                <CountryCard country={country} />
                </ActiveLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Container;
