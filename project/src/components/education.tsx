import { Button } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React from 'react';

interface educationProps {
  onOpen: () => void;
}

function Education({ onOpen }: educationProps) {
  return (
    <div>
      <Button onClick={onOpen} style={{ marginTop: '1rem'}}>
        <DensityMediumIcon/>
      </Button>
      <h1>Education</h1>
      
    </div>
  );
};

export default Education;