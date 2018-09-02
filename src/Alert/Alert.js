import { 
  h, 
  render, 
  Component 
} from 'preact'
import PropTypes from 'proptypes'
import classNames from 'classnames'
import { mapToCssModules } from './../Utils'
import Fade from './../Fade'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
}

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
  },
}

class Alert extends Component { 
  constructor() { 
    super(); 
  } 

  render(props) { 
    const {
      className,
      closeClassName,
      closeAriaLabel,
      cssModule,
      tag: Tag,
      color,
      isOpen,
      toggle,
      children,
      transition,
      fade,
      innerRef,
      ...attributes
    } = this.props

    const classes = mapToCssModules(classNames(
      className,
      'alert',
      `alert-${color}`,
      { 'alert-dismissible': toggle }
    ), cssModule)

    const closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule)

    const alertTransition = {
      ...Fade.defaultProps,
      ...transition,
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0,
    }

    return (
      <Fade {...attributes} {...alertTransition} tag={Tag} className={classes} in={isOpen} role="alert" innerRef={innerRef}>
        {children}
      </Fade>
    )
  }
}

Alert.propTypes = propTypes
Alert.defaultProps = defaultProps

export default Alert