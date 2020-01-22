import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledTileImage,
  StyledTile,
  StyledTileInput,
  StyledTileLabel,
  StyledTileH5
} from './styled-component'

class CarouselItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onToggleChecked: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {...this.props}
  }

  render() {
    return (<StyledTile className='carousel-thumbnail-wrapper'>
      <StyledTileInput
        type='checkbox'
        id={`checkbox-${this.props.id}`}
        onChange={this.props.onToggleChecked}
        data-id={this.props.id}
        data-location={this.props.src}
        checked={this.props.checked} />
      <StyledTileLabel htmlFor={`checkbox-${this.props.id}`}>
        <StyledTileImage alt={this.props.name} src={this.props.src} />
      </StyledTileLabel>
      <StyledTileH5>{this.props.name}</StyledTileH5>
    </StyledTile>)
  }
}

export default CarouselItem
