import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchVideos } from '../actions';
import { Video } from './video';

class VideoList extends Component {

  componentWillMount() {
    this.fetchVideos();
  }

  componentDidMount() {
    this.selectVideo(this.props.videos[0]);
  }

  // componentDidUpdate() {
  //   this.list.scrollTop = this.list.scrollHeight;
  // }

  fetchVideos = () => {
    this.props.fetchVideos(this.props.selectedCategory);
  }

  // renderVideo = (video) => {
  //   return (
  //     <div
  //       key={video}
  //       className={video === this.props.selectedvideo ? 'active-video' : null}


  //     </div>
  //   )
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
    selectedcategory: state.selectedCategory
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos, selectVideo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);

