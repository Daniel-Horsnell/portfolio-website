import { Typography } from '@mui/material';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, PhotoContainer, Video, VideoBottomBlur, Photo, BottomBlur, Heading1 } from './styledComponents'

interface photoAnimatorProps {
  photoUrl: string;
  headingText: string;
  isVideo: boolean;
}

export default function PhotoAnimator({photoUrl, headingText, isVideo}: photoAnimatorProps) {
  return (
    <div style={{alignItems: 'baseline'}}>
      <React.Fragment>
        <Container>
            {isVideo ? (
              <PhotoContainer >
              <Video autoPlay loop muted key={photoUrl}>
                <source src={photoUrl} type='video/mp4' />
              </ Video>
              <VideoBottomBlur >
                <Heading1 key={headingText}>{headingText}</Heading1>
              </VideoBottomBlur>
              </PhotoContainer>
              ) :
              <PhotoContainer >
                <Photo src={photoUrl} key={photoUrl} alt={`Photo ${photoUrl}`} style={{ width: '100%', height: 'auto'}}/> 
                <BottomBlur >
                  <Heading1 key={headingText}>{headingText}</Heading1>
                </BottomBlur>
              </PhotoContainer>
            }
        </Container>
      </React.Fragment>
    </div>
  );
};

