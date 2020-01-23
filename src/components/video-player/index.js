import React, {Component} from 'react'
import PropTypes from 'prop-types'

import StyledVideo from './styled-component'

class VideoPlayer extends Component {
  static propTypes = {
    /**
     * source: {
     *   src:
     *   type: MIME Type e.g. video/mp4
     * }
     */
    source: PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string
    }).isRequired
  }

  render() {
    return (
      <div className='video-wrapper'>
        <StyledVideo controls src={this.props.source.src} poster={``}>
          Your browser does not support HTML5 video.
        </StyledVideo>
      </div>)
  }
}

export default VideoPlayer
