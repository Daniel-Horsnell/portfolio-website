import { Typography } from '@mui/material';
import React from 'react';
import styled, { keyframes } from 'styled-components';

interface photoAnimatorProps {
  photoUrl: string;
  headingText: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: white;
`;

const PhotoContainer = styled.div`
  display: flex;
  position: relative;
  zIndex: 1;
  top: 0;
  alignItems: baseline
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const BottomBlur = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
`;

const Heading = styled.p`
  position: absolute;
  bottom: 0;
  right: 10rem;
  font-size: 64px;
  font-family: monospace;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  animation-delay: 1s;
  opacity: 0;
`;

export default function PhotoAnimator({photoUrl, headingText}: photoAnimatorProps) {
  return (
    <div style={{alignItems: 'baseline'}}>
      <React.Fragment>
        <Container>
          <PhotoContainer >
            <Photo src={photoUrl} key={photoUrl} alt={`Photo ${photoUrl}`} style={{ width: '100%', height: 'auto'}}/>
            <BottomBlur>
              <Heading key={headingText}>{headingText}</Heading>
            </BottomBlur>
          </PhotoContainer>
        </Container>
      </React.Fragment>
    </div>
  );
};

