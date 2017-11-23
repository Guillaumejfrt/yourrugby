import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions';
import { selectVideo } from '../actions';
import { Video } from './video';

class VideoList extends Component {

  componentWillMount() {
    this.props.fetchVideos(this.props.selectedCategory);
  }

  componentDidMount() {
    this.selectVideo(this.props.videos[0]);
  }

  // componentDidUpdate() {
  //   this.list.scrollTop = this.list.scrollHeight;
  // }

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

