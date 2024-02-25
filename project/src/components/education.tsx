import { Button } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';

function Education() {
  return (
    <div style={{ position: 'relative' , width: '100%'}}>
      <PhotoAnimator photoUrl='UNSW.jpg' headingText='Tertiary Education' isVideo={false}/> 
    </div>
  );
};

export default Education;