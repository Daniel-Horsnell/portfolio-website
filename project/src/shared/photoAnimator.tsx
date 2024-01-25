import React from 'react';
import styled, { keyframes } from 'styled-components';

interface photoAnimatorProps {
  photoUrls: string[]
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  animation: ${fadeIn} 1.5s ease-in-out;
  box-shadow: 0 0 8px 8px white inset;
`;

export default function PhotoAnimator({photoUrls}: photoAnimatorProps) {
  return (
    <div style={{alignItems: 'baseline'}}>
      <React.Fragment>
        <PhotoContainer style={{ alignItems: 'baseline'}}>
          {photoUrls.map((url, index) => (
            <Photo key={index} src={url} alt={`Photo ${index + 1}`} style={{ boxShadow: '0 0 50px 50px white inset'}}/>
          ))}
        </PhotoContainer>
      </React.Fragment>
    </div>
  );
};

