import { Button } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import React from 'react';

interface resumeProps {
  onOpen: () => void;
}

function Resume({ onOpen }: resumeProps) {
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <h1>Resume</h1>
      <Button onClick={onOpen} style={{ marginTop: '1rem'}}>
        <DensityMediumIcon/>
      </Button>
      <iframe
        title="PDF Viewer"
        width="100%"
        height="100%"
        src="resume.pdf"
      />
    </div>
  );
};

export default Resume;