import React from 'react';
import { Heading2, Heading3, Text } from '../../shared/styledComponents';
import GitHubIcon from '@mui/icons-material/GitHub';
import { makeStyles } from '@mui/material';
import styled from 'styled-components';


function RobotArtist() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <div>
        <Heading2>Robotics Elective Competition</Heading2>
        <div style={{ marginBottom: '1rem', left: '6rem', marginTop: '2rem'}}>
          <Heading3>Technologies Used: </Heading3>
          <Text> - ROS 2</Text>
          <Text> - C++</Text>
          <Text> - Python</Text>
        </div>
        <div style={{ marginBottom: '1rem', left: '6rem', marginTop: '2rem' }}>
          <Text>This project was completed as part of an elective course in my degree. The curriculum for this course</Text>
          <Text>involved a competition which pitted teams against one another to create the most interesting and unique</Text>
          <Text>robotic solution to a complex problem. The only restrictions being it had to utilise ROS 2, computer </Text>
          <Text>vision and a UR5e robot.</Text>
        </div>
        <div style={{ marginBottom: '1rem', left: '6rem'}}>
          <Text>For our project my group and I created a robtoic system that would detect when a person smiled, and </Text>
          <Text>then take a photo. It would then analyse the contours in the face and draw them on a piece of paper </Text>
          <Text>placed randomly in the workspace. It would also draw three different contours with three different </Text>
          <Text>pens, picking each up from a rack, which was also placed randomly in the workspace.</Text>
        </div>
        <div style={{ marginBottom: '5rem', left: '6rem'}}>
          <Text>For this project my team and I won first place out of the seven teams competing in the subject.</Text>
        </div>
      </div>
    </div>
  );
};

export default RobotArtist;