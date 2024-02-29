import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';
import { Heading2, Heading3, Text } from '../shared/styledComponents';

function Education() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <div style={{ position: 'relative' , width: '100%'}}>
        <PhotoAnimator photoUrl='UNSW.jpg' headingText='Tertiary Education' isVideo={false}/>
      </div>
      <div>
        <Heading2>UNSW</Heading2>
        <div style={{ marginTop: '2rem', marginBottom: '2rem'}}>
          <Heading3>Bachelor's of Engineering (Honours)</Heading3>
          <Heading3>Specialisation: Mechatronics</Heading3>
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <Text style={{marginBottom: '1rem'}}>Honours Class: 1</Text>
          <Text>WAM: 83.75</Text>
        </div>
        <div style={{ marginBottom: '5rem', left: '6rem'}}>
          <Text>I studied a Bacholor's of Engineering at the University of New South Wales, graduating with first class honours.</Text>
          <Text>I started this degree in 2020 and completed it at the end of 2023. During this time I participated in many projects.</Text>
          <Text>Some of which can be seen in the projects section of this website.</Text>
        </div>
      </div>
    </div>
  );
};

export default Education;