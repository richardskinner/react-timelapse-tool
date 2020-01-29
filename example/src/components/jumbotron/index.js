import React, { Component } from 'react'

class Jumbotron extends Component {
  render() {
    return (
      <div className='jumbotron-container'>
        <div className='title'>React Timelapse Tool</div>
        <div className='sub-title'>A Timelapse Creator GUI</div>
        <a href='https://github.com/richardskinner/react-timelapse-tool' className='button'>
          Install from Github
        </a>
      </div>
    )
  }
}

export default Jumbotron
