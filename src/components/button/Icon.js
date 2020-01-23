import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus,
  faFileExport,
  faFileUpload,
  faQuestionCircle,
  faSave,
  faCameraRetro,
  faPencilAlt,
  faFilter,
  faCheckCircle,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPlus,
  faFileExport,
  faFileUpload,
  faQuestionCircle,
  faSave,
  faCameraRetro,
  faPencilAlt,
  faFilter,
  faCheckCircle,
  faWindowClose
)

class Icon extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired
  }
  render() {
    return (<FontAwesomeIcon icon={this.props.icon} />)
  }
}

export default Icon
