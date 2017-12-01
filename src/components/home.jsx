import React from 'react';
import CategoryList from '../containers/category_list';
import VideoList from '../containers/video_list';
import SelectedVideo from '../containers/selected_video';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="selected-video-container">
        <SelectedVideo />
      </div>
      <div className="video-list-container">
        <VideoList/>
      </div>
    </div>
  );
};

export default Home;
