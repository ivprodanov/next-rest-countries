import React, {useContext} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeContext } from '../../context/ThemeContext';
// import '../../styles/Card.css'

function CountryCard(props) {
  const {theme} = useContext(ThemeContext)

  return (
    <Card sx={{ maxWidth: 240 }} 
    style={{backgroundColor: theme.elements, color: theme.text }}
    >
      <CardMedia
        component="img"
        height="150"
        image={props.country.flag}
        alt={`The flag of ${props.country.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align='left' fontSize={24} fontWeight={800}>
          {props.country.name}
        </Typography>
        <Typography variant="h4" color={theme.text} align='left' lineHeight={0.5} fontSize={14}>
          <Typography><b>Population:</b> {props.country.population}</Typography>
          <Typography><b>Region:</b> {props.country.region}</Typography>
          <Typography><b>Capital:</b> {props.country.capital}</Typography>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CountryCard