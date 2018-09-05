import {
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'div',
}

class Container extends Component {
  render(props) {
    const {
      className,
      cssModule,
      fluid,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      fluid ? 'container-fluid' : 'container'
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

Container.propTypes = propTypes
Container.defaultProps = defaultProps

export default Container