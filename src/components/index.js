import React, {Component} from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from './video-player'
import Carousel from '../components/carousel'
import Button from './button'
import Modal from 'react-modal'
import styled, {createGlobalStyle} from 'styled-components'
import Icon from './button/Icon'

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
    poster: '',
    src: '',
    type: ''
  }
}

Modal.setAppElement('#root')

export default class TimelapseTool extends Component {
  static propTypes = {
    config: PropTypes.shape({
      createCallback: PropTypes.func,
      saveCallback: PropTypes.func,
      carousel: PropTypes.shape({
        settings: PropTypes.object,
        tiles: PropTypes.array
      })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      video: initialState.video,
      carousel: this.props.config.carousel,
      selectAll: false,
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  createVideo = () => {
    console.log('createVideo')
    let newVideo = this.props.config.createCallback(this.getCheckedItems())
    this.setState({
      ...this.state,
      video: newVideo,
      selectAll: false,
      carousel: {
        ...this.state.carousel,
        tiles: this.state.carousel.tiles.map((item) => {
          item.checked = false
          return item
        })
      }
    })
  }

  saveVideo = () => {
    console.log('saveVideo')
    this.props.config.saveCallback(this.state.video)
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  toggleChecked = (el) => {
    this.state.carousel.tiles.find(element => element.id === el.target.attributes['data-id'].value).checked = el.target.checked
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

  resetPlayer() {
    this.setState({
      ...this.state,
      video: initialState.video,
      selectAll: false,
      carousel: {
        ...this.state.carousel,
        tiles: this.state.carousel.tiles.map((item) => {
          item.checked = false
          return item
        })
      }
    })
  }

  getCheckedItems = () => {
    return this.state.carousel.tiles.filter((v) => {
      return v.checked === true
    })
  }

  isItemsChecked = () => {
    return this.getCheckedItems().length <= 0
  }

  render() {
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
        <Button disabled={this.isItemsChecked()} type='button' class='' icon='pencil-alt' callback={this.createVideo} value='Create' />
        <Button disabled={false} type='button' class='' icon='plus' callback={() => this.resetPlayer()} value='New' />
        <Button disabled={this.state.video.src === null} type='button' class='btn-link' icon='save' callback={this.saveVideo} value='Save' />
        <Button disabled={false} type='button' class='' icon='question-circle' callback={() => this.openModal()} value='Help' />
      </div>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel='Help Modal'
      >
        <h2>Help <Icon icon={`question-circle`} /><button style={{'float': 'right'}} onClick={this.closeModal}>close <Icon icon={`times-circle`} /></button></h2>
        <div>I am a modal</div>
      </Modal>
    </StyledContainer>)
  }
}
