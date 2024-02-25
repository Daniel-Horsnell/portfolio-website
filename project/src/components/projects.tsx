import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/material';
import PhotoAnimator from '../shared/photoAnimator';

const projectsList = [['Thesis', '/thesisVideo.mp4'], ['Digital Twin', '/digitalTwin.mp4'], ['Robot Artist', '/robotArtistVideo.mp4'], ['SumoBots', '/sumoBots.mp4']]

function Projects() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{display: 'flex', overflowX: 'hidden'}}>
      <div style={{borderRight: '1px solid lightgrey', height: '100vh', width: '10vw'}}>
        <Tabs variant='fullWidth' orientation='vertical' value={value} onChange={handleChange} sx={{ borderTop: 1, borderColor: 'divider' }} style={{position: 'absolute', top: '4rem', left: 0, width: '10vw'}}>
          {projectsList.map((val, index) => (
            <Tab value={index} label={val[0]} />
          ))}
        </Tabs>
        
      </div>
      <div style={{width: '90vw', overflowX: 'hidden'}}>
        <PhotoAnimator photoUrl={projectsList[value][1]} headingText={projectsList[value][0]} isVideo={true}/>
      </div>
    </div>
  );
};

export default Projects;