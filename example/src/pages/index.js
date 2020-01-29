import React, {Component, Fragment} from 'react'
import Prism from 'prismjs'
import TimelapseTool from 'react-timelapse-tool'
import Jumbotron from '../components/jumbotron'

import data from '../static/data.json'
import video from '../static/video.json'

class IndexPage extends Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <Fragment>
        <Jumbotron />
        <div className='page-container'>
          <section className='section'>
            <h1>Get Started</h1>
            <div>
              <p>First, you need to install this plugin:</p>
              <pre>
                <code className='language-shell'>{`npm i react-timelapse-tool --save`}</code>
              </pre>
            </div>
            <div>
              <p>If yarn is your preferred choice, then you can do:</p>
              <pre>
                <code className='language-shell'>{`yarn add react-timelapse-tool`}</code>
              </pre>
            </div>
            <div>
              <p>Then, all you need to do is define the plugin in your component:</p>
              <pre>
                <code className='language-javascript'>
                  {`import React, { Component } from 'react'
import TimelapseTool from 'react-timelapse-tool'

export default class App extends Component {
  data = {
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
          src: '/image01.jpg',
          name: 'image01.0'
        },
        {
          id: '2',
          src: '/image02.jpg',
          name: 'image01.1'
        }
      ]
    }
  }
}

render() {
  return (
    <TimelapseTool config={this.data} onCreate={() => console.log('Create Video')} onSave={() => console.log('Save Video')} />
  )
}
`}
                </code>
              </pre>
              <p>That's all folks.</p>
            </div>
          </section>
          <section className='section'>
            <h2>Demo</h2>
            <div className='react-search-box-container'>
              <TimelapseTool config={data} onCreate={() => video} onSave={() => console.log('onSave')} />
            </div>
          </section>
          <section className='section'>
            <h2>Basic Props</h2>
            <div>
              <p><b>config</b> - The config for setting up the carousel</p>
            </div>
            <div>
              <p><b>onCreate</b> - Callback for creating the video. Passes a list of selected images</p>
            </div>
            <div>
              <p><b>onSave</b> - Callback for saving the video. Passes the video url back to download.</p>
            </div>
          </section>
        </div>
      </Fragment>
    )
  }
}

export default IndexPage
