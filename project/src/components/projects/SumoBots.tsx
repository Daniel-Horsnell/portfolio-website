import React from 'react';
import { Heading2, Heading3, Text } from '../../shared/styledComponents';

function SumoBots() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <div>
        <Heading2>UNSW SumoBots</Heading2>
        <div style={{ marginBottom: '1rem', left: '6rem', marginTop: '2rem'}}>
          <Heading3>Technologies Used: </Heading3>
          <Text> - Arduino</Text>
          <Text> - C++</Text>
          <Text> - Solidworks</Text>
        </div>
        <div style={{ marginBottom: '5rem', left: '6rem', marginTop: '2rem' }}>
          <Text>SumoBots is competition in which teams create robots to push another teams robot out of a circular arena.</Text>
          <Text>My team of four and I entered the UNSW tournament and won second place. To create our Sumobot we used </Text>
          <Text>arduino, IR snesors and and ultrasonic sensor to control the robot, detect the arena edge and detect </Text>
          <Text>the other robot. Our design consisted of a 3D printed chassis with an outer shell of sheet-metal that </Text>
          <Text>formed a wedge shape.</Text>
        </div>
      </div>
    </div>
  );
};

export default SumoBots;