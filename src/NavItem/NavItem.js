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

class NavItem extends Component {
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
      'nav-item',
      active ? 'active' : false
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

NavItem.propTypes = propTypes
NavItem.defaultProps = defaultProps

export default NavItem
