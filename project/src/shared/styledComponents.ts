import styled, { keyframes } from "styled-components";

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

const Video = styled.video`
  width: 90vw;
  height: auto;
  animation: ${fadeIn} 1.5s ease-in-out;
  type: video/mp4;
`;

const BottomBlur = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
`;

const VideoBottomBlur = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; 
  height: 30%; 
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
`;

const Heading1 = styled.p`
  position: absolute;
  bottom: 0;
  right: 10rem;
  font-size: 64px;
  font-family: monospace;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  animation-delay: 1s;
  opacity: 0;
`;

const Heading2 = styled.p`
  position: relative;
  font-size: 64px;
  font-family: monospace;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1.5s;
  opacity: 0;
  margin: 0;
  left: 5rem;
  width: auto;
`;

const Heading3 = styled.p`
  position: relative;
  font-size: 42px;
  font-family: monospace;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1.7s;
  opacity: 0;
  margin: 1rem;
  left: 4rem;
  width: auto;
`;

const Text = styled.p`
  position: relative;
  font-size: 24px;
  font-family: monospace;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 1.9s;
  opacity: 0;
  margin: 0;
  left: 5rem;
  width : 90vw;
`;

export {
  fadeIn,
  PhotoContainer,
  Container,
  Photo,
  Video,
  BottomBlur,
  VideoBottomBlur,
  Heading1,
  Heading2,
  Heading3,
  Text,
}