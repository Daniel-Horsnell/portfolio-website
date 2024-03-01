import React from 'react';
import { Text } from '../shared/styledComponents';

function Resume() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden'}}>
      <Text style={{margin: '1rem', marginTop: '18px', fontSize: '28px', animation: 'none', opacity: '1'}}>Resume</Text>
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