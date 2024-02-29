import React from 'react';
import { Heading2, Heading3, Text } from '../../shared/styledComponents';

function Establishment() {
  return (
    <div style={{ overflowX: 'hidden'}}>
      <div>
        <Heading2>Position: Cellar Staff</Heading2>
        <div style={{ marginTop: '2rem', marginBottom: '3rem'}}>
          <Heading3>June 2021 - November 2022</Heading3>
        </div>
        <div style={{ marginBottom: '5rem', left: '6rem'}}>
          <Text>At this job I worked as part of a team to recieve and distrubute product to the mutiple venues within</Text>
          <Text>the building. These venues included The Establishment, Sushi E, Hemmesphere, Palmer & Co, Mr Wong </Text>
          <Text>and multiple function venues. This job also included managing stock and heling out around the venues </Text>
          <Text>on occasion.</Text>
        </div>
      </div>
    </div>
  );
};

export default Establishment;