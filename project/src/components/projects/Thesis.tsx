import React from 'react';
import { Heading2, Heading3, Text } from '../../shared/styledComponents';

function Thesis() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <div>
        <Heading2>Video To Instructions</Heading2>
        <div style={{ marginBottom: '1rem', left: '6rem', marginTop: '2rem'}}>
          <Heading3>Technologies Used: </Heading3>
          <Text> - Python</Text>
          <Text> - OpenCV</Text>
          <Text> - YOLOv7</Text>
        </div>
        <div style={{ marginBottom: '1rem', left: '6rem', marginTop: '2rem'}}>
          <Text>My Thesis aimed to generate instructions from a video of a disassembly in a way that could be</Text>
          <Text>utilised by a robot to complete the same disassembly. </Text>
        </div>
        <div style={{ marginBottom: '1rem', left: '6rem'}}>
          <Text>To do this it first uses a custom trained YOLOv7 model to identify the tool and hence the action taking </Text>
          <Text>place. Once the action is complete, it then grabs the frame before and after the action. Using pixel </Text>
          <Text>differentiation it can then find the locationof the action relative to the LCD screen. Once these </Text>
          <Text>steps were complete it would translate this information to a robotic action and write it to a JSON file.</Text>
        </div>
        <div style={{ marginBottom: '5rem', left: '6rem'}}>
          <Text>With this JSON file a robotic system was capable of recreating these actions. The programming for this was</Text>
          <Text>completed by another student.</Text>
        </div>
      </div>
    </div>
  );
};

export default Thesis;