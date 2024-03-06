import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';
import { Button } from '@mui/material';
import { Heading1, Heading2, Text } from '../shared/styledComponents';

function Home() {
  return (
    <div style={{ position: 'relative' , width: '100%'}}>
      <PhotoAnimator photoUrl={'Background.jpeg'} headingText='Daniel Horsnell' isVideo={false}/>
      <Heading2>Portfolio</Heading2>
      <Text style={{ marginTop: '2rem'}}>I am Mechatronics Engineer based out of Sydney with a strong skillset in coding.</Text>
      <Text>My current role is as a Control Systems Software Engineer for Dematic, however in my previous role I was a Robotics Software Engineer at Advanced Navigation. 
        This has given me a diverse skillset across many coding languages and technologies.</Text>
    </div>
  );
};

export default Home;