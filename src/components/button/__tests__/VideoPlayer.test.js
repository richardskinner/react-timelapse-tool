import React from 'react'
import {shallow} from 'enzyme'
import VideoPlayer from '../../video-player'
import StyledVideo from '../../video-player/styled-component'

describe('VideoPlayer Component', () => {
  it('renders without crashing', () => {
    shallow(<VideoPlayer source={{
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }} />)
  })

  it('renders a html5 video player', () => {

    const wrapper = shallow((<VideoPlayer source={{
      poster: '/logo/logo.png',
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }} />))
    expect(
      wrapper
        .contains(<StyledVideo controls src='https://vjs.zencdn.net/v/oceans.mp4' poster='/logo/logo.png'>Your browser does not support HTML5 video.</StyledVideo>)
    ).toEqual(true)
  })
})
