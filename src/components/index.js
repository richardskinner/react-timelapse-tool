import React, {Component} from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from './video-player'
import Carousel from '../components/carousel'
import styled, {createGlobalStyle} from 'styled-components'
import Button from './button'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const initialState = {
  video: {
    src: '',
    type: ''
  }
}

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

  constructor(props) {
    super(props)
    this.state = {
      video: this.props.config.video,
      carousel: this.props.config.carousel,
      selectAll: false
    }
  }

  toggleChecked = (el) => {
    this.state.config.carousel.tiles.find(element => element.id === el.target.attributes['data-id'].value).checked = el.target.checked
    this.setState({
      tiles: this.state.carousel.tiles
    })
  }

  toggleCheckAll = () => {
    this.setState({
      ...this.state,
      selectAll: !this.state.selectAll,
      carousel: {
        ...this.state.carousel,
        tiles: this.state.carousel.tiles.map((item) => {
          item.checked = !this.state.selectAll
          return item
        })
      }
    })
  }

  resetPlayer = () => {
    this.setState({
      ...this.state,
      video: initialState.video
    })
  }

  render() {
    console.log(this.state)
    return (<StyledContainer>
      <GlobalStyle />
      <VideoPlayer source={this.state.video} />
      <Carousel tiles={this.state.carousel.tiles} settings={this.state.carousel.settings} onToggleChecked={this.toggleChecked} />
      <div className={`controls-wrapper`}>
        <Button
          class='btn-primary btn-sm'
          value='Select All'
          icon='check-circle'
          callback={this.toggleCheckAll} />
        <Button disabled={true} type='button' class='' icon='pencil-alt' callback={() => alert('BUTTON #1')} value='Create' />
        <Button disabled={false} type='button' class='' icon='plus' callback={() => this.resetPlayer()} value='New' />
        <Button disabled={true} type='button' class='btn-link' icon='save' callback={() => alert('BUTTON #3')} value='Save' />
        <Button disabled={false} type='button' class='' icon='question-circle' callback={() => alert('BUTTON #4')} value='Help' />
      </div>
    </StyledContainer>)
  }
}
