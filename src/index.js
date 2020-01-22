import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import TimelapseTool from './components'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  config = {
    video: {
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    },
    carousel: {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
      },
      tiles: [
        {
          id: '1',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.0',
          width: '3072',
          height: '2048',
          created_at: '2019-05-01 18:36:00'
        },
        {
          id: '2',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.1',
          width: '3072',
          height: '2048',
          created_at: '2019-05-02 18:36:00'
        },
        {
          id: '3',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.2',
          width: '3072',
          height: '2048',
          created_at: '2019-05-03 18:36:00'
        },
        {
          id: '4',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.3',
          width: '3072',
          height: '2048',
          created_at: '2019-05-04 18:36:00'
        },
        {
          id: '5',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.4',
          width: '3072',
          height: '2048',
          created_at: '2019-05-05 18:36:00'
        },
        {
          id: '6',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.5',
          width: '3072',
          height: '2048',
          created_at: '2019-05-06 18:36:00'
        },
        {
          id: '7',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.6',
          width: '3072',
          height: '2048',
          created_at: '2019-05-07 18:36:00'
        },
        {
          id: '8',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.7',
          width: '3072',
          height: '2048',
          created_at: '2019-05-08 18:36:00'
        },
        {
          id: '9',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.8',
          width: '3072',
          height: '2048',
          created_at: '2019-05-09 18:36:00'
        },
        {
          id: '10',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.9',
          width: '3072',
          height: '2048',
          created_at: '2019-05-10 18:36:00'
        },
        {
          id: '11',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.0',
          width: '3072',
          height: '2048',
          created_at: '2019-05-01 18:36:00'
        },
        {
          id: '12',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.1',
          width: '3072',
          height: '2048',
          created_at: '2019-05-02 18:36:00'
        },
        {
          id: '13',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.2',
          width: '3072',
          height: '2048',
          created_at: '2019-05-03 18:36:00'
        },
        {
          id: '14',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.3',
          width: '3072',
          height: '2048',
          created_at: '2019-05-04 18:36:00'
        },
        {
          id: '15',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.4',
          width: '3072',
          height: '2048',
          created_at: '2019-05-05 18:36:00'
        },
        {
          id: '16',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.5',
          width: '3072',
          height: '2048',
          created_at: '2019-05-06 18:36:00'
        },
        {
          id: '17',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.6',
          width: '3072',
          height: '2048',
          created_at: '2019-05-07 18:36:00'
        },
        {
          id: '18',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.7',
          width: '3072',
          height: '2048',
          created_at: '2019-05-08 18:36:00'
        },
        {
          id: '19',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.8',
          width: '3072',
          height: '2048',
          created_at: '2019-05-09 18:36:00'
        },
        {
          id: '20',
          src: '/baucam04-2019-06-17_17_35_02.237.jpg',
          name: 'baucam01.9',
          width: '3072',
          height: '2048',
          created_at: '2019-05-10 18:36:00'
        }
      ]
    }
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
        <TimelapseTool config={this.config} />
      </div>
    )
  }
}
