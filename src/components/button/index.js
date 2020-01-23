import React from 'react'
import Icon from './Icon'
import PropTypes from 'prop-types'

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
    return (<button disabled={this.props.disabled} className={`${this.props.class}`} onClick={() => this.props.callback() }>
      <Icon icon={this.props.icon} />
      {this.props.value}
    </button>)
  }
}

export default Button
