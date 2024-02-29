import React from 'react';
import { Heading2, Heading3, Text } from '../../shared/styledComponents';

function AdvancedNavigation() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <div>
        <Heading2>Position: </Heading2>
        <Heading2>Robotics Software Engineer Intern</Heading2>
        <div style={{ marginTop: '2rem', marginBottom: '3rem'}}>
          <Heading3>November 2022 - January 2024</Heading3>
        </div>
        <div style={{ marginBottom: '1rem', left: '6rem'}}>
          <Text>During my employment at this company I worked for the Cloud Ground Control team.</Text>
          <Text>This team was tasked with creating, improving and servicing a cloud based ground control system.</Text>
          <Text>This system is capable of controlling multiple autonomous vehicles from a web interface.</Text>
        </div>
        <div style={{ marginBottom: '1rem', left: '6rem'}}>
          <Text>In this position I worked as a full-stack engineer, a firmware developer and and Android developer.</Text>
          <Text>The webstack I worked with was React Typescript for the frontend and Java, Golang and Kotlin for the backend.</Text>
          <Text>The firmware was written for a Raspberry Pi and was written in Golang and C.</Text>
        </div>
        <div style={{ marginBottom: '5rem', left: '6rem'}}>
          <Text>Apart from these I also worked on some other projects in this team such as designing and building unmanned </Text>
          <Text>vehicles and a ROS 2 project.</Text>
        </div>
      </div>
    </div>
  );
};

export default AdvancedNavigation;