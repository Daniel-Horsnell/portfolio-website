import React from 'react';
import PhotoAnimator from '../shared/photoAnimator';


const Home: React.FC = () => {
  return (
    <div style={{ alignItems: 'baseline'}}>
      <h1>Welcome to My Website</h1>
      <PhotoAnimator photoUrls={['Background.jpeg']} />
    </div>
  );
};

export default Home;