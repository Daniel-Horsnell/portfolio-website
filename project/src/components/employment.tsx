import { Box, Slider, Typography } from '@mui/material';
import React from 'react';

const marks = [
  {
    value: 0,
    label: 'January 2020',
  },
  {
    value: 1.5,
    label: 'July 2022',
  },
  {
    value: 3,
    label: 'November 2023',
  },
  {
    value: 4,
    label: 'Now',
  },
];

function valuetext(value: number) {
  if (value < 1.5) return 'The Newport: Merivale';
  else if (value < 3) return 'The Establishemnt: Merivale';
  else if (value < 4) return 'Advanced Navigation';
  else return "Unemployed";
}

const Employment: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <div>
      <h1>Employment</h1>
      <div style={{ display: 'flex'}}>
        <Box sx={{ height: '80vh' }}>
          <Slider 
            aria-label="Custom marks"
            defaultValue={0}
            min={0}
            max={4}
            getAriaValueText={valuetext}
            step={0.5}
            valueLabelDisplay="off"
            marks={marks}
            orientation="vertical"
            onChange={handleChange}></Slider>
        </Box>
        <Typography>{valuetext(value)}</Typography>
      </div>
    </div>
  );
};

export default Employment;