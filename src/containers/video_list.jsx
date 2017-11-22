import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class VideoList extends Component {

  renderVideo = (video) => {
    return (
      <div
        key={video}
        className={video === this.props.selectedvideo ? 'active-video' : null}
        onClick={() => this.handleClick(video)}>

        <Video key={video.id.videoId} video={video} />

      </div>
    )
  }
{this.props.videos.map(video => <VideoItem key={video.id.videoId} video={video} />)}
  render() {
    return(
      <div className="video-list">
        {this.props.videos.map(this.renderVideo)}
      </div>
    )
  }
}
