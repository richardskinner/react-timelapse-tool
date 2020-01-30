# react-timelapse-tool

[![NPM](https://img.shields.io/npm/v/react-timelapse-tool.svg)](https://www.npmjs.com/package/react-timelapse-tool)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![MIT](https://camo.githubusercontent.com/f53583e5278740443555de94bff91fbb5d19b99a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f72656163742d7365617263682d626f782e7376673f7374796c653d666c61742d737175617265)](https://github.com/richardskinner/react-timelapse-tool/blob/master/LICENSE)

## Overview
This is a GUI to display a users images, select and save a timelapse video. It uses a slick slider for displaying images in a carousel and HTML5 video to play the timelapse video.

***This is a frontend tool only.***

### Creating the timelapse video

FFMPEG is *A complete, cross-platform solution to record, convert and stream audio and video.*
This tool can create such videos but is server side command line tool. You can fire such a command by calling a url to a server which can fire this command.

##### Further FFMPEG Reading
[FFMPEG Docs](http://www.ffmpeg.org/)

## Install

```bash
npm install --save react-timelapse-tool
```

## Usage
```jsx
import React, { Component } from 'react'
import TimelapseTool from 'react-timelapse-tool'

class App extends Component {

    config = {
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
              src: '/image1.jpg',
              name: 'image01.0'
            },
            {
              id: '2',
              src: '/image2.jpg',
              name: 'image01.1'
            }
          ]
        }
    }

  render () {
    return (
      <TimelapseTool config={this.config}} onCreate={() => console.log('Create Video')} onSave={() => console.log('Save Video')} />
    )
  }
}
```

## Props
* config
	* carousel
		* id
		* src
		* name
	* createCallback
	* saveCallback

## Built With

* [React Slick Slider](https://www.npmjs.com/package/react-slick-slider)

## License

MIT © [richardskinner](https://github.com/richardskinner)
