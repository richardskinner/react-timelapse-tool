import React from 'react'
import {mount} from 'enzyme'
import Carousel from '../index'
import carousel from '../__mocks__/carousel'
import CarouselItem from '../CarouselItem'

describe('Carousel Component', () => {
  let carouselItems
  let carouselSettings
  let wrapper

  beforeEach(() => {
    carouselSettings = carousel.settings
    carouselItems = carousel.items
    wrapper = mount(<Carousel settings={carouselSettings} tiles={carouselItems} />)
  })

  it('renders slider without crashing', () => {
    expect(wrapper.find('.slick-slider').length).toEqual(1)
  })

  it('renders with carousel tiles with correct amount', () => {
    expect(wrapper.find('.slick-slide:not(.slick-cloned)')).toBeTruthy()
    expect(wrapper.find('.slick-slide:not(.slick-cloned)').length).toEqual(20)
  })

  it('should set checked on tile when clicked', () => {
    // ...
  })

  it('displays a message instead of the slider when no tiles exist', () => {
    // ...
  })
})
