import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  color: 'secondary',
  pill: false,
  tag: 'span'
}

class Badge extends Component { 
  render(props) {
    const {
      className,
      cssModule,
      color,
      pill,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'badge',
      'badge-' + color,
      pill ? 'badge-pill' : false
    ), cssModule)

    if (attributes.href && Tag === 'span') {
      Tag = 'a'
    }
    
    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

Badge.propTypes = propTypes
Badge.defaultProps = defaultProps

export default Badge