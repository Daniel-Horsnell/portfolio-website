import React from 'react';
import styled, { keyframes } from 'styled-components';

interface photoAnimatorProps {
  photoUrl: string;
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
  box-shadow: 0 0 8px 8px white inset;
`;

const BottomBlur = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
`;

export default function PhotoAnimator({photoUrl}: photoAnimatorProps) {
  return (
    <div style={{alignItems: 'baseline'}}>
      <React.Fragment>
        <Container>
          <PhotoContainer >
            <Photo src={photoUrl} key={photoUrl} alt={`Photo ${photoUrl}`} style={{ boxShadow: '0 0 50px 50px white inset', width: '100%', height: 'auto'}}/>
            <BottomBlur/>
          </PhotoContainer>
        </Container>
      </React.Fragment>
    </div>
  );
};

