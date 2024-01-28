import React from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Button } from '@mui/material';

interface projectsProps {
  onOpen: () => void;
}

function Projects({ onOpen }: projectsProps) {
  return (
    <div>
      <Button onClick={onOpen} style={{ marginTop: '1rem'}}>
        <DensityMediumIcon/>
      </Button>
      <h1>Projects</h1>
      {/* Add your photos and text descriptions here */}
    </div>
  );
};

export default Projects;