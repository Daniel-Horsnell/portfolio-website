import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Button } from '@mui/material';

interface homeProps {
  onOpen: () => void;
}

function Home({ onOpen }: homeProps) {
  return (
    <div style={{ position: 'relative' , width: '100%'}}>
      <Button onClick={onOpen} style={{ position: 'absolute', top: '1rem', left: 0, zIndex: 2 }}>
        <DensityMediumIcon />
      </Button>

      <PhotoAnimator photoUrl={'Background.jpeg'} passedStyle={{ position: 'relative', zIndex: 1, top: 0, alignItems: 'baseline', width: '100%', height: '100%' }} />
  </div>
  );
};

export default Home;