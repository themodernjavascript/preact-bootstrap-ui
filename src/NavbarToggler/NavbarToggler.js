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
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
}

const defaultProps = {
  tag: 'button',
  type: 'button'
}

class NavbarToggler extends Component {
  render(props) {
    const {
      className,
      cssModule,
      children,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'navbar-toggler'
    ), cssModule)

    return (
      <Tag {...attributes} className={classes}>
        {children || <span className={mapToCssModules('navbar-toggler-icon', cssModule)} />}
      </Tag>
    )
  }
}

NavbarToggler.propTypes = propTypes
NavbarToggler.defaultProps = defaultProps

export default NavbarToggler
