import React from 'react';
import CategoryList from '../containers/category_list';
import VideoList from '../containers/video_list';

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>Yourrugby home</h1>
      </div>
      <CategoryList/>
      <VideoList/>
    </div>
  );
};

export default Home;
