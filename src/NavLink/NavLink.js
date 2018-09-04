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
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.any,
}

const defaultProps = {
  tag: 'a',
}

class NavLink extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }

    if (this.props.href === '#') {
      e.preventDefault()
    }

    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render(props) {
    let {
      className,
      cssModule,
      active,
      tag: Tag,
      innerRef,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'nav-link',
      {
        disabled: attributes.disabled,
        active: active
      }
    ), cssModule)

    return (
      <Tag {...attributes} ref={innerRef} onClick={this.onClick} className={classes} />
    )
  }
}

NavLink.propTypes = propTypes
NavLink.defaultProps = defaultProps

export default NavLink