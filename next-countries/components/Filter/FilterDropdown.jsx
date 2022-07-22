import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterDropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ m:1, minWidth: '16vw'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Africa</MenuItem>
          <MenuItem value={20}>America</MenuItem>
          <MenuItem value={30}>Asia</MenuItem>
          <MenuItem value={30}>Europe</MenuItem>
          <MenuItem value={30}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
