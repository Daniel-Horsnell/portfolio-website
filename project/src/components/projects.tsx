import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/material';

const projectsList = ['Thesis', 'Digital Twin', 'Robot Artist', 'SumoBot']

function Projects() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={{borderRight: '1px grey', height: '100vh', width: '10vw'}}>
        <Tabs variant='fullWidth' orientation='vertical' value={value} onChange={handleChange} sx={{ borderTop: 1, borderColor: 'divider' }} style={{position: 'absolute', top: '4rem', left: 0, width: '10vw'}}>
          {projectsList.map((value, index) => (
            <Tab value={index} label={value} />
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;