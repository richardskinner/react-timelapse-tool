import React from 'react'
import Icon from './Icon'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
    color: #333;
    background-color: transparent;
    border-color: #ccc;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
`

class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    class: PropTypes.string,
    callback: PropTypes.func,
    value: PropTypes.string,
    icon: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      ...this.props,
      disabled: false
    }
  }

  render() {
    return (<StyledButton disabled={this.props.disabled} className={`${this.props.class}`} onClick={() => this.props.callback() }>
      <Icon icon={this.props.icon} />&nbsp;{this.props.value}
    </StyledButton>)
  }
}

export default Button
