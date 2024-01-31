import React from 'react';

function Resume() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden'}}>
      <h1 style={{ margin: '1rem', marginLeft: '5rem', marginTop: '15px' }}>Resume</h1>
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