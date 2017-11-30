import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectVideo } from '../actions';

class Video extends Component {

  handleClick = () => {
    this.props.selectVideo(this.props.video);
  }

  render() {
    const video = this.props.video.snippet;

    return (
      <div className="test">
        <div className="video-item" onClick={this.handleClick}>
          <div>
            <img src={video.thumbnails.default.url} alt="" />
          </div>
          <div className="video-infos">
            <p>{video.title}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Video);
