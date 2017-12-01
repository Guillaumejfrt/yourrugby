import React from 'react';
import { Link } from 'react-router-dom';
import SelectedVideo from '../containers/selected_video';

const About = () => {
  return (
    <div className="app">
      <div>
        <Link to="">Home</Link> | <strong>About</strong>
      </div>
      <div>
        This is the best rugby website in the world to watch rugby videos.
      </div>
    </div>
  );
};

export default About;
