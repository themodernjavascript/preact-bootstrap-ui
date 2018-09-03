import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import { canUseDOM } from './../Utils'

const propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
}

class Portal extends Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode)
    }
    this.defaultNode = null
  }

  render(props) {
    if (!canUseDOM) {
      return null
    }

    if (!props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div')
      document.body.appendChild(this.defaultNode)
    }

    return ReactDOM.createPortal(
      props.children,
      props.node || this.defaultNode
    )
  }
}

Portal.propTypes = propTypes

export default Portal