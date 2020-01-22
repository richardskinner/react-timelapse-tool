import React, {Component} from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from './video-player'
import Carousel from '../components/carousel'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default class TimelapseTool extends Component {
  static propTypes = {
    config: PropTypes.shape({
      video: PropTypes.object,
      carousel: PropTypes.shape({
        settings: PropTypes.object,
        tiles: PropTypes.array
      })
    })
  }

  render() {
    return (<StyledContainer>
      <GlobalStyle />
      <VideoPlayer source={this.props.config.video} />
      <Carousel tiles={this.props.config.carousel.tiles} settings={this.props.config.carousel.settings} />
    </StyledContainer>)
  }
}
