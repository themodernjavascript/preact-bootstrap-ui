import { 
  h, 
  render, 
  Component 
} from 'preact'

import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules, deprecated } from './../Utils'

const propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
  full: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggleable: deprecated(PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), 'Please use the prop "expand"'),
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

const defaultProps = {
  tag: 'nav',
  expand: false,
}

const getExpandClass = (expand) => {
  if (expand === false) {
    return false
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand'
  }

  return `navbar-expand-${expand}`
}

// To better maintain backwards compatibility while toggleable is deprecated.
// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.
const toggleableToExpand = {
  xs: 'sm',
  sm: 'md',
  md: 'lg',
  lg: 'xl',
}

const getToggleableClass = (toggleable) => {
  if (toggleable === undefined || toggleable === 'xl') {
    return false
  } else if (toggleable === false) {
    return 'navbar-expand'
  }

  return `navbar-expand-${toggleable === true ? 'sm' : (toggleableToExpand[toggleable] || toggleable)}`
}

class Navbar extends Component {
  render(props) {
    const {
      toggleable,
      expand,
      className,
      cssModule,
      light,
      dark,
      inverse,
      fixed,
      sticky,
      color,
      tag: Tag,
      ...attributes
    } = props

    const classes = mapToCssModules(classNames(
      className,
      'navbar',
      getExpandClass(expand) || getToggleableClass(toggleable),
      {
        'navbar-light': light,
        'navbar-dark': inverse || dark,
        [`bg-${color}`]: color,
        [`fixed-${fixed}`]: fixed,
        [`sticky-${sticky}`]: sticky,
      }
    ), cssModule)

    return (
      <Tag {...attributes} className={classes} />
    )
  }
}

Navbar.propTypes = propTypes
Navbar.defaultProps = defaultProps

export default Navbar