import React from 'react'
import {shallow} from 'enzyme'
import VideoPlayer from '../../video-player'

describe('VideoPlayer Component', () => {
  it('renders without crashing', () => {
    shallow(<VideoPlayer source={{
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }} />)
  })

  it('renders a html5 video player', () => {
    const wrapper = shallow(<VideoPlayer source={{
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }} />)
    expect(wrapper.contains(<video controls>
      <source src='https://vjs.zencdn.net/v/oceans.mp4' type='video/mp4' />
          Your browser does not support HTML5 video.
    </video>)).toEqual(true)
  })
})
