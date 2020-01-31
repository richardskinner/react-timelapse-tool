import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
`

const StyledRangeSlider = styled.input`
  display: inline-block;
  margin-bottom: 20px;
  width: 100%;
`

class RangeSlider extends React.Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    setRangeSliderValue: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      ...this.props
    }
  }

  render() {
    return (<div className='timelapse-range-slider'>
      <StyledLabel htmlFor='formControlRange'>Frame Per Second</StyledLabel>
      <StyledRangeSlider
        type='range'
        min={this.props.min}
        max={this.props.max}
        className='form-control-range'
        id='formControlRange'
        defaultValue={this.props.value}
        onChange={this.props.setRangeSliderValue}
      />
    </div>)
  }
}

export default RangeSlider
