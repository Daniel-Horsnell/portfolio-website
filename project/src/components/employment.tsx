import { Box, Button, Divider, Slider, Typography } from '@mui/material';
import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';
import TheNewport from './employment/theNewport';
import Establishment from './employment/establishment';
import AdvancedNavigation from './employment/advancedNavigation';

const marks = [
  {
    value: 0,
    label: '12/19',
  },
  {
    value: 1.5,
    label: '06/21',
  },
  {
    value: 3,
    label: '11/22',
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

function getPicture(value: number) {
  if (value < 1.5) return 'The_Newport.jpg';
  else if (value < 3) return 'Palmerco.jpg';
  else if (value < 4) return 'CloudGroundControl.jpg';
  else return "grey.png";
}

function Employment() {
  const [value, setValue] = React.useState<number>(3);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', overflowX: 'hidden'}}>
      <div style={{ display: 'flex', zIndex: 2, borderRight: '1px solid lightgrey', height: '100vh', width: '10vw'}}>
        <Box sx={{ height: '80vh', width: '10vw', background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)', marginRight: '1rem' }}>
          <Slider 
            aria-label="Custom marks"
            defaultValue={3}
            min={0}
            max={4}
            getAriaValueText={valuetext}
            step={0.5}
            valueLabelDisplay="off"
            marks={marks}
            orientation="vertical"
            onChange={handleChange}
            style={{ margin: '1rem', marginTop: '5rem' }}></Slider>
        </Box>
      </div>
      <div style={{ width: '100%' }}>
        <PhotoAnimator photoUrl={getPicture(value)} headingText={valuetext(value)} isVideo={false}/>
        <div>
          {value < 1.5? <TheNewport/> : value < 3 ? <Establishment/> : value < 4? <AdvancedNavigation/> : <div/>}
        </div>
      </div>
    </div>
  );
};

export default Employment;