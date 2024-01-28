import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Button } from '@mui/material';

interface homeProps {
  onOpen: () => void;
}

function Home({ onOpen }: homeProps) {
  return (
    <div style={{ position: 'relative' }}>
      <Button onClick={onOpen} style={{ position: 'absolute', top: '1rem', left: 0, zIndex: 2 }}>
        <DensityMediumIcon />
      </Button>

      <PhotoAnimator photoUrls={['Background.jpeg']} passedStyle={{ position: 'relative', zIndex: 1, top: 0, alignItems: 'baseline' }} />
  </div>
  );
};

export default Home;