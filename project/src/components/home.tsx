import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';
import { Button } from '@mui/material';
import { Text } from '../shared/styledComponents';

function Home() {
  return (
    <div style={{ position: 'relative' , width: '100%'}}>
      <PhotoAnimator photoUrl={'Background.jpeg'} headingText='Daniel Horsnell' isVideo={false}/>
    </div>
  );
};

export default Home;