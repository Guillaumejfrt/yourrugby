import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';

import { fetchVideos } from '../actions';
import { selectVideo } from '../actions';
import Video from './video';

const API_KEY = 'AIzaSyAFiXpwV4vRo-6uBny9fFnZTfRkqLrhmJI'

class VideoList extends Component {

  youtubeSearch = (word) => {
    YTSearch({ key: API_KEY, term: word }, (videos) => {
      this.props.fetchVideos(videos);
    });
  }

  componentWillMount() {
    this.youtubeSearch(this.props.selectedCategory);
  }

  componentDidMount() {
    // this.props.selectVideo(this.props.videos[0]);
    // debugger
  }

  render() {
    return(
      <div className="video-list">
        {this.props.videos.map(video => <Video key={video.id.videoId} video={video}/>)}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
    videos: state.videos,
    categories: state.categories,
    selectedCategory: state.selectedCategory
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);

