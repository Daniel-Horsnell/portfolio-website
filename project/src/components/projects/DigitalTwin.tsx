import React from 'react';
import { Heading2, Heading3, Text } from '../../shared/styledComponents';

function DigitalTwin() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <div>
        <Heading2>Unity & AWS Digital Twin</Heading2>
        <div style={{ marginBottom: '1rem', left: '6rem', marginTop: '2rem'}}>
          <Heading3>Technologies Used: </Heading3>
          <Text> - Unity 3D</Text>
          <Text> - C#</Text>
          <Text> - AWS</Text>
          <Text> - MQTT</Text>
          <Text> - RAPID (ABB programming language)</Text>
        </div>
        <div style={{ marginBottom: '5rem', left: '6rem', marginTop: '2rem' }}>
          <Text>In this project I created a digital wtin with the help of another student. This digital twin was</Text>
          <Text>capable of mirroring the physical robot, controlling the physical robot and replaying previous actions</Text>
          <Text>the robot had taken. The three dimensional rendering was done using the Unity game engine. Whilst the</Text>
          <Text>connection to the physical robot was done through Amazon Web Service and an MQTT broker.</Text>
        </div>
      </div>
    </div>
  );
};

export default DigitalTwin;