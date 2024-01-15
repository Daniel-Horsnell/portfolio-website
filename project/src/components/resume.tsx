import React from 'react';

const Resume: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <h1>Resume</h1>
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