import React from 'react'
import Slider from 'react-slick'
import CarouselItem from './CarouselItem'
import Button from '../button'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'

import {StyledCarousel} from './styled-component'

class Carousel extends React.Component {
  static propTypes = {
    settings: PropTypes.shape({
      dots: PropTypes.bool,
      infinite: PropTypes.bool,
      speed: PropTypes.number,
      slidesToShow: PropTypes.number,
      slidesToScroll: PropTypes.number
    }).isRequired,
    tiles: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      ...this.props,
      selectAll: false
    }
  }

  toggleChecked = (el) => {
    this.state.tiles.find(element => element.id === el.target.attributes['data-id'].value).checked = el.target.checked
    this.setState({
      tiles: this.state.tiles
    })
  }

  toggleCheckAll = () => {
    this.setState({
      selectAll: !this.state.selectAll,
      tiles: this.state.tiles.map((item) => {
        item.checked = !this.state.selectAll
        return item
      })
    })
  }

  createCarousel = () => {
    let carousel = []
    this.state.tiles.map((item, key) => {
      return carousel.push(<CarouselItem
        key={key}
        id={item.id}
        name={item.name}
        src={item.src}
        checked={item.checked || false}
        onToggleChecked={this.toggleChecked} />)
    })
    return carousel
  }

  showSlider = () => {
    if (this.props.tiles.length <= 0) {
      return (<h3>No carousel tile exist.</h3>)
    }
    return (<Slider {...this.props.settings}>{this.createCarousel()}</Slider>)
  }

  render() {
    return (
      <StyledCarousel>
        {this.showSlider()}
        <Button
          class='btn-primary btn-sm'
          value='Select All'
          icon='check-circle'
          callback={this.toggleCheckAll} />
      </StyledCarousel>
    )
  }
}

export default Carousel
