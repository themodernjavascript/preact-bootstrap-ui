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
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}

const defaultProps = {
  tag: 'li'
}

class BreadcrumbItem extends Component { 
  render(props) {
    const {
      className,
      cssModule,
      active,
      tag: Tag,
      ...attributes
    } = props
    
    const classes = mapToCssModules(classNames(
      className,
      active ? 'active' : false,
      'breadcrumb-item'
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} aria-current={active ? 'page' : undefined} />
    )
  }
}

BreadcrumbItem.propTypes = propTypes
BreadcrumbItem.defaultProps = defaultProps

export default BreadcrumbItem