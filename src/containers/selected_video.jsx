import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedVideo extends Component {

  render() {
    const video = this.props.selectedVideo.id;

    if (!video) {
      return <div className="video-selected">Select a video...</div>;
    }

    const url = `https://www.youtube.com/embed/${video.videoId}`;

    return (
      <div className="video-selected">
        <hr />
        <div className="selected-videocard">
          <div className="selected-video-title details">
            <p>{this.props.selectedVideo.snippet.title}</p>
          </div>
          <iframe title={video.videoId} src={url} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedVideo: state.selectedVideo
  };
}

export default connect(mapStateToProps, null)(SelectedVideo);
