import React from 'react'

function CountryPage(props) {
  return (
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <img src={props.country.flag} alt={`The flag of ${props.country.name}`}/>
        </Grid>
        <Grid item xs={6}>
            <Grid item xs={6}>
                <Item>xs=8</Item>
            </Grid>
            <Grid item xs={6}>
                <Item>xs=4</Item>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default CountryPage