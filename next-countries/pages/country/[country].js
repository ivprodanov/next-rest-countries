import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Link, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((country) => {
    return {
      params: { country: country.alpha3Code },
    };
  });

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async (context) => {
  const alphaCode = context.params.country;
  const res = await fetch(`https://restcountries.com/v2/alpha/${alphaCode}`);
  const data = await res.json();

  return {
    props: { country: data },
  };
};

function CountryPage({ country }) {
  const [borders, setBorders] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v2/alpha/${country.alpha3Code}`);
        const data = await res.json();
        const borders = await fetch(`https://restcountries.com/v2/alpha?codes=${data.borders.join()}`)
        const bordersData = await borders.json()
        const borderNames = bordersData.map(x => [{name: x.name, code: x.alpha3Code}])

        setBorders(bordersData)
      } catch (error) {
        console.log('Error loading data...', error.message)
      }
    }
    fetchData();
  }, [])

  return (
    <React.Fragment>
      <Link href='/'>
        <Button className="back-button" startIcon={<KeyboardBackspaceIcon />}>
          Back
        </Button>
      </Link>
    <Grid container p={5}>
      <Grid item xs={6} mt={4}>
        <img
          width={"80%"}
          src={country.flag}
          alt={`The flag of ${country.name}`}
        />
      </Grid>
      <Grid item xs={6}>
          <Grid item xs={12} p={2} mt={5}>
            <Typography
              variant="h5"
              color="text.secondary"
              align="left"
              fontWeight={800}
            >
              {country.name}
            </Typography>
          </Grid>
        <Grid container>
          <Grid item xs={6} p={2}>
            <Typography>
              <b>Native Name:</b> {country.nativeName}
            </Typography>
            <Typography>
              <b>Population:</b> {country.population}
            </Typography>
            <Typography>
              <b>Region:</b> {country.region}
            </Typography>
            <Typography>
              <b>Sub Region:</b> {country.subregion}
            </Typography>
            <Typography>
              <b>Capital:</b> {country.capital}
            </Typography>
          </Grid>

          <Grid item xs={6} p={2}>
            <Typography>
              <b>Top Level Domain:</b> {country.topLevelDomain}
            </Typography>
            <Typography>
              <b>Currencies:</b>{" "}
              {country.currencies.map((curr) => {
                return <span>{curr.name}</span>;
              })}
            </Typography>
            <Typography>
              <b>Languages:</b>{" "}
              <span>
                {country.languages.map((lang) => (
                  <span>{lang.name} </span>
                ))}
              </span>
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} p={2} mt={5}>
          <Typography>
            <b>Border Countries:</b>{" "}
            {borders !== undefined ? borders.map((cntr) => (
              <Link href={`/country/${cntr.alpha3Code}`}>
                <Button>{cntr.name}</Button>
              </Link>
            )) : 'Loading...'}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    </React.Fragment>
  );
}

export default CountryPage;
