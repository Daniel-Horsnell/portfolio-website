import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';
import { Button } from '@mui/material';

function Home() {
  return (
    <div style={{ position: 'relative' , width: '100%'}}>
      <PhotoAnimator photoUrl={'Background.jpeg'} />
  </div>
  );
};

export default Home;